import React from 'react'
import Useravatar from '../Useravatar'
import Link from 'next/link'

type Props = {}

function GroupMYprofileCard({}: Props) {
  return (
    <div className=' border bg-black rounded-md md:rounded-lg w-screen  max-w-60'>
        <img className='rounded-md md:rounded-lg max-h-28 w-full object-cover' src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" alt="" />
        <div className=' py-2 flex flex-col items-center'>
            <Useravatar />
            <p className=' font-semibold '>Anmol Raj</p>
        </div>
        <hr />
        <div className=' flex items-center justify-between px-6 text-sm text-gray-800 py-2 dark:text-gray-400'>
            <p>Meditations</p>
            <p>24</p>
        </div>
        <div className=' flex items-center justify-between px-6 text-sm text-gray-800 py-2 dark:text-gray-400'>
            <p>Stars Earned</p>
            <p>3</p>
        </div>
        <hr />
        <Link className=' text-center flex justify-around py-1' href={'/me/profile'}>Visit Profile</Link>
    </div>
  )
}

export default GroupMYprofileCard