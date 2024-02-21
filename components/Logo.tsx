import Image from 'next/image'
import React from 'react'
import logo from '@image/Logo.png'
import Link from 'next/link'

type Props = {
    width : number ,
    height : number,
    isLink : boolean
}

function Logo({width=128 ,height=64 ,isLink}: Partial<Props>) {
  if(isLink) return <Link href={'/'}><Image src={logo.src} width={width} height={height} className='' alt='Purease Inc.' /></Link>
  return (
    <Image src={logo.src} width={width} height={height} className='' alt='Purease Inc.' />
  )
}

export default Logo