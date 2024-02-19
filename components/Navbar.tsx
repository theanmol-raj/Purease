'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Navitem = { navitem: string; href: string }
type Navitems = Readonly<(Navitem)[]>;

const navitems: Navitems = [
  { navitem: "Home", href: "/" },
  { navitem: "Home", href: "/" },
  { navitem: "Home", href: "/" },
  { navitem: "Home", href: "/" },
  { navitem: "Home", href: "/" },
  { navitem: "Home", href: "/" },
] as const ;

export default function Navbar() {
  const [isFixed ,setIsFixed] = useState<boolean>(false);

  const transitionNavbar = ():void => {
    window.scrollY>100 ? setIsFixed(true) : setIsFixed(false);
  }
  
  useEffect(()=>{
    window.addEventListener('scroll' ,transitionNavbar)
    return () => window.removeEventListener('scroll' ,transitionNavbar)
  },[])


  return (
    <div className={`w-full ${isFixed ? 'fixed' : 'relative'} top-0 z-50 bg-white dark:bg-inherit border-b`}>
      <div className=" max-w-7xl mx-auto flex justify-between items-center p-6">
        <div>MYLOGO GOES HERE</div>
        <div className="hidden md:flex  items-center space-x-6 text-sm">
            {navitems.map((item : Navitem) => <Link href={item.href} key={item.href}>{item.navitem}</Link>)}
        </div>
      </div>
    </div>
  );
}
