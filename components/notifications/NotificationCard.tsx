import React from 'react'
import Useravatar from '../Useravatar'
import { Cross, X } from 'lucide-react'

type Props = {}

function NotificationCard({}: Props) {
  return (
    <div className=' border p-2 md:p-4 rounded-md md:rounded-lg flex space-x-2 items-center'>
        <Useravatar />
        <div className=' w-full'>
            <p>by Anmol</p>
            <p className=' text-xs text-gray-800 dark:text-gray-400'>lorem ipseum is n=doner yo lo mo to</p>

        </div>
        <div><X /></div>

    </div>
  )
}

export default NotificationCard