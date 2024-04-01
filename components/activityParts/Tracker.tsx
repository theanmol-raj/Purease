import React from 'react'
import ProgressBar from './Progressbar'

type Props = {}

function Tracker({}: Props) {
  return (
    <div className=' dark:black/10  p-3 md:p-5 max-w-xl space-y-4 md:rounded-full md:px-12 rounded-lg border'>
        <div className='flex justify-between items-end'>
            <p className=' text-2xl'>3/14</p>
            <p className=' text-sm text-gray-700 dark:text-gray-400'>Meditations this week</p>
        </div> 
        <ProgressBar />
    </div>
  )
}

export default Tracker