import ActivityCard from '@/components/activityParts/ActivityCard'
import { Brain, Dumbbell, Music2, Star } from 'lucide-react'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <div>
        <p className=" md:text-xl py-2">Recommended for you</p>
        <div className=" flex space-x-3">
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
        </div>
      </div>  
      <div className=" py-12">
        <p className=" md:text-xl pb-3">Explore</p>
        <div className=" flex space-x-3">
          <div className="border p-4 rounded-md shadow-lg cursor-pointer dark:hover:bg-purple-500 hover:text-white hover:shadow-pink-500 text-purple-500 dark:bg-black ">
            <Star />
          </div>
          <div className="border p-4 rounded-md shadow-lg cursor-pointer dark:hover:bg-purple-500 hover:text-white hover:shadow-pink-500 text-purple-500 dark:bg-black ">
            <Music2 />
          </div>
          <div className="border p-4 rounded-md shadow-lg cursor-pointer dark:hover:bg-purple-500 hover:text-white hover:shadow-pink-500 text-purple-500 dark:bg-black ">
            <Brain />
          </div>
          <div className="border p-4 rounded-md shadow-lg cursor-pointer dark:hover:bg-purple-500 hover:text-white hover:shadow-pink-500 text-purple-500 dark:bg-black ">
            <Dumbbell />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page