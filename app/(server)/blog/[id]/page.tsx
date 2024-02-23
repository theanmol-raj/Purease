/* eslint-disable @next/next/no-img-element */
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import React from 'react'
import {PortableText, PortableTextComponents} from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image';
import {getImageDimensions} from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url';

const SampleImageComponent = ({value, isInline} :any) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
  
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }

const myPortableTextComponents : PortableTextComponents = {
    types: {
      image: SampleImageComponent,
      callToAction: ({value, isInline} :{ value : Partial<Record<string ,string>> , isInline : boolean}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
  
    marks: {
      link: ({children, value} :any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-3xl my-3 font-bold">{children}</h1>,
        h2: ({children}) => (
            <h2 className="text-2xl my-5 font-semibold" >{children}</h2>
          ),
          h3: ({children}) => (
            <h3 className="text-xl my-5 font-medium" >{children}</h3>
          ),
          h4: ({children}) => (
            <h4 className="text-lg my-5 font-normal" >{children}</h4>
          ),
          normal: ({children}) => (
            <p className="  my-5 text-gray-800 dark:text-gray-300" >{children}</p>
          ),
        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
          <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
      },
      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
    
        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
      },
      
  }



async function page({ params: { id } }: { params: { id: string } }) {
    const post = await client.fetch(
        groq`*[_type == "post" && slug.current == $id ][0]{...,author->} `,
        { id }
      );
    
      if (!post) return <h1>BUilding</h1>
      let date = new Date(post?.publishedAt!);
      let out =
        date.toLocaleString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        }) +
        " " +
        new Intl.DateTimeFormat("en-GB", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(date);

        console.log(post)
        


  return (
    <article className=" max-w-4xl mx-auto ">
      <div className="  md:p-8 rounded-md  bg-[#f2faf7] dark:bg-black p-4">
        <div className="  ">
          <div className=" pt-8">
            <h1 className=" text-4xl  font-semibold">
              {post?.title}
            </h1>
            
            <div className=" flex space-x-2 py-2">
            <p className="  pt-2 flex items-center space-x-4  text-base">
                by {post?.author.name} {post?.author.isAi && <span className=" text-xs mx-2 bg-[#23fed6] dark:text-black text-white px-2 py-1 rounded-sm">Coach</span>} | 
              </p>
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                {out} | 
              </p>
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                {/* <StarIcon fontSize="inherit" /> */}
              </p>
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                4 min read
              </p>
            </div>
            <h2 className="  pt-4 text-gray-500">
              {post?.description}
            </h2>
            <img src={urlForImage(post.mainImage)} className="py-4 w-full object-cover" alt="" />
            <div>
              <PortableText
              value={post?.body}
              components={myPortableTextComponents}
                />           
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default page