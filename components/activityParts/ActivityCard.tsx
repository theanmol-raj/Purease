import React from 'react'

type Props = {}

function ActivityCard({}: Props) {
  return (
    <div className='rounded-md border md:rounded-lg hover:shadow-pink-500 shadow-md dark:bg-black p-2 max-w-56'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0r6lPfqsK-mdgE53uQ-E5b9g_HEejK1yNA&usqp=CAU' className='md:rounded-t-lg rounded-t-md' />
        <div className='p-4 px-0 text-xs'>
        <p className=' font-light'>Meditation</p>
        <p className=' text-sm font-medium'>Day 1: Start Your Journey</p>
        </div>    
    </div>
  )
}

export default ActivityCard