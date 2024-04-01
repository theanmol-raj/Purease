import Tracker from '@/components/activityParts/Tracker'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <div className=' my-2'>
        <Tracker/>
        </div>
        <div className=' py-4'>
          <h1 className='md:text-lg pt-1 md:pt-3 '>Meditations</h1>
          <div className=' flex overflow-x-auto flex-nowrap space-x-2 w-full py-1 md:py-2 scrollbar-hide'>
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />

            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />
            <div className=' h-20 w-20 bg-gradient-to-br from-black dark:from-white flex-none' />

          </div>
          
        </div>
    </div>
  )
}

export default page