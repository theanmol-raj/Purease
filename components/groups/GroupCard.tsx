import React from 'react'

type Props = {}

function GroupCard({}: Props) {
  return (
    <div className=' bg-gradient-to-br from-[#23fed6] to-purple-500  flex-none p-1 rounded-full'>
        <img className='h-16 w-16 md:h-18 md:w-18  md:max-h-24 md:max-w-24 border-4 aspect-square rounded-full' src='https://media.istockphoto.com/id/1166079645/photo/mysterious-power-in-the-hands.jpg?s=612x612&w=0&k=20&c=t97X_-UqFHvEQryuqOEc9HY_trztDylBCRJhdjyjw4Q=' />
    </div>
  )
}

export default GroupCard