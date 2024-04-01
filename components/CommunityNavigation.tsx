"use client"
import { Bell, HomeIcon, Plus, Shapes, User } from 'lucide-react'
import React from 'react'

type Props = {}

function CommunityNavigation({}: Props) {
  return (
    <div className='flex justify-between shadow-xl hover:shadow-purple-500 fixed border bg-white dark:bg-black p-2 items-center md:rounded-full px-6 bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 w-screen md:w-full md:max-w-max md:space-x-12 '>
        <HomeIcon />
        <Shapes />
        <button className=' bg-purple-500 p-2 rounded-full'><Plus /></button>
        <Bell />
        <User />
    </div>
  )
}

export default CommunityNavigation