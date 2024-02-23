'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Darkmodetoggle from "./Darkmodetoggle";
import Userdropdown from "./Userdropdown";
import Logo from "./Logo";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import NavDropDown from "./NavDropDown";

export type Navitem = { navitem: string; href: string }
type Navitems = Readonly<(Navitem)[]>;

export const navitems: Navitems = [
  { navitem: "Sage", href: "/" },
  { navitem: "About Us", href: "/about-us" },
  { navitem: "Pricing", href: "/pricing" },
  { navitem: "Blog", href: "/blog" },
  { navitem: "Responsible Ai", href: "/" },
  { navitem: "Tests", href: "/test" },
] as const ;

export default function Navbar({session} :{session :Session | null}) {
  
  const [isFixed ,setIsFixed] = useState<boolean>(false);

  const transitionNavbar = ():void => {
    window.scrollY>100 ? setIsFixed(true) : setIsFixed(false);
  }
  
  
  useEffect(()=>{
    window.addEventListener('scroll' ,transitionNavbar) ;
    return () => window.removeEventListener('scroll' ,transitionNavbar) ;
  },[]);
  const pathname = usePathname();
  if (pathname?.includes('content-lake')) return <></>;
  

  return (
    <div className={`w-full ${isFixed ? 'sticky md:fixed border-b bg-white dark:bg-[#09090b]' : 'sticky md:relative bg-[#f2faf7] dark:bg-[#09090b]'} top-0 z-50  dark:bg-inherit `}>
      <div className={` max-w-7xl mx-auto flex justify-between items-center ${isFixed ? 'px-2 p-1 md:px-6 md:py-3' : 'px-2 p-1 md:p-6'}`}>
        <div className=""><Logo isLink height={12} width={50} /></div>


        <div className="flex  items-center space-x-2 md:space-x-6 text-sm">
            <div className="hidden md:flex items-center space-x-6">{navitems.map((item : Navitem) => <Link href={item.href} key={item.navitem}>{item.navitem}</Link>)}</div>
            <Darkmodetoggle />
            <div className="md:inline-flex hidden">
              <Userdropdown session={session} />
            </div>
            <div className="md:hidden">
            <NavDropDown session={session} />
            </div>
        </div>

        {/* <div className="hidden md:flex  items-center space-x-6 text-sm">
            {navitems.map((item : Navitem) => <Link href={item.href} key={item.navitem}>{item.navitem}</Link>)}
            <Darkmodetoggle />
            <Userdropdown session={session} />
        </div>
        <div className="md:hidden  items-center space-x-2 text-sm">
            
            <NavDropDown session={session} />
        </div> */}



      </div>
    </div>
  );
}
