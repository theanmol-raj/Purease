

import ChatInput from '@/components/messageParts/ChatInput'
import React from 'react'

import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth/auth";
import { redirect } from 'next/navigation';

type Props = {}

async function page({}: Props) {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect('/')
  }
  
   return (
    <div className=' flex-1    dark:bg-inherit px-4 md:px-0'>
      <div className="absolute inset-0 overflow-hidden opacity-60 dark:opacity-100 ">
      <video className="w-full h-full object-cover" autoPlay muted>
        {/* <source src='/videos/glitter.mp4' type="video/mp4" /> */}
        <source src='/videos/pattern.mp4' type="video/mp4" />
        Your browser does not support the video tag.
        
      </video>
    </div>
      <div className=' w-full h-full flex flex-col  max-w-3xl mx-auto'>
        <div className=' w-full flex-1 ' />
        <div className=' mt-2 mb-4 w-full'>
          <ChatInput />
        </div>

      </div>
      
    </div>
  )
}

export default page