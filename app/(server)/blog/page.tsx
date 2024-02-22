import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = any;

async function page({}) {
  const posts = await client.fetch(`*[_type == "post"]{
        categories[]->{
          title
        },slug,
        title,publishedAt,_id,mainImage,author->
      } `);

  return (
    <div className=" max-w-7xl mx-auto py-8 md:py-12 lg:py-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl ">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              In-house Hand-crafted Articles from{" "}
              <span className=" font-semibold text-black px-2  bg-[#23fed6] ">
                Sage
              </span>{" "}
              & Team{" "}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts?.map((post: Post) => (
              <article
                key={post?._id}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">{post.categories[0].title}</span>
                  <span className="text-sm">
                    {new Date(post.publishedAt).toLocaleString()}
                  </span>
                </div>
                <img src={urlForImage(post?.mainImage)} alt="" className=" rounded-md" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight pt-4 text-gray-900 dark:text-white">
                  <Link href={`/blog/${post?.slug?.current}`}>
                    {post?.title}
                  </Link>
                </h2>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={urlForImage(post?.author.image)}
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">
                      {post.author.name}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
