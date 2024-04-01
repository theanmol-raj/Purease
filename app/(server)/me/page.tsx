import GroupCard from "@/components/groups/GroupCard";
import GroupMYprofileCard from "@/components/groups/GroupMYprofileCard";
import GroupPost from "@/components/groups/GroupPost";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { generateDate } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

type Post = any;

export default async function page() {
    const posts = await client.fetch(`*[_type == "post"]{
        categories[]->{
          title
        },slug,
        title,publishedAt,description,_id,mainImage,author->
      } `);
  return (
    <div className="flex-1 flex flex-col ">
      <div className=" relative">
        <div className=" absolute bg-gradient-to-l from-white dark:from-[#09090b] z-20 w-10 h-full right-0" />
        <div className="flex overflow-x-auto flex-nowrap space-x-2 w-full py-1 md:py-2 scrollbar-hide relative">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
      <div className=" flex  flex-1 mt-6 md:space-x-6">
        <div className=" hidden md:inline-block">
            <div className="sticky top-4">
                <GroupMYprofileCard />
            </div>
        </div>
        <div className="  w-full max-w-xl  space-y-2 md:space-y-6 ">
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />
          <GroupPost />

        </div>

        <div className="hidden md:inline-block">
            <div className="sticky top-4">
            <div className=" max-w-64">
                <p className=" mb-2 ml-2">Latest Blogs </p>
            {posts?.map((post: Post) => (
              <article
                key={post?._id}
                className="p-6 bg-white mb-2 shadow-xl  rounded-3xl border border-gray-200 hover:shadow-pink-600 dark:bg-black dark:border-gray-700"
              >
                <div className="flex flex-col items-start items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">{post.categories[0].title}</span>
                  <span className="text-sm">
                    {generateDate(post?.publishedAt!)}
                  </span>
                </div>
                <h2 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link prefetch={false} href={`/blog/${post?.slug?.current}`}>
                    {post?.title}
                  </Link>
                </h2>
                <p className=" truncate pb-6 text-sm">{post.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={urlForImage(post?.author.image)}
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium text-sm dark:text-white">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}
