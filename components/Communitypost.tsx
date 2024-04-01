import React from 'react'
import { Avatar } from './ui/avatar'
import { Heart } from 'lucide-react'

type Props = {}

function Communitypost({}: Props) {
  return (
    <div className=' dark:bg-black p-6 rounded-md'>
        <div className='flex text-sm space-x-2'>
            <img src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' className='h-10 w-10 rounded-full object-cover' />
            <div>
                <p>Annonymous</p>
                <p>{new Date().toLocaleString()}</p>
            </div>

        </div>
        <p className='text-sm text-gray-300 py-4 ml-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='flex '>
            <Heart/>
        </div>
    </div>
  )
}

export default Communitypost