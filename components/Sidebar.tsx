"use client";
import { MoreVertical, SquarePen, X } from "lucide-react";

import Logo from "./Logo";
import { useSidebarContext } from "@/utils/context";
import Useravatar from "./Useravatar";
import Darkmodetoggle from "./Darkmodetoggle";
import Userdropdown from "./Userdropdown";
import { useSession } from "next-auth/react";
import SidebarMessage from "./messageParts/SidebarMessage";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useSidebarContext();
  const {data : session } = useSession();

  return (
    <aside className={`h-screen rounded-r-md ${expanded ? ' fixed md:relative z-50  w-full md:max-w-max' :''}`}>
      <nav className="h-full flex flex-col bg-white rounded-r-md dark:bg-black border-r shadow-sm">
        {expanded &&<div className="p-2.5 m-3 rounded-md  hover:bg-gray-300 dark:text-white dark:hover:bg-gray-950 cursor-pointer  flex justify-between items-center ">
          <div className=" flex items-end text-sm font-semibold">
            <Logo width={20} />
            <p> New Chat</p>
          </div>
          <div className=" flex items-center space-x-2"><SquarePen size={20} />
          <button className=" md:hidden" onClick={()=>setExpanded(false)}><X size={20}/></button></div>
        </div>}
        {/* <Darkmodetoggle/> */}

        {expanded && <div className=" flex-1 overflow-y-scroll scrollbar-thin ">
          <ol className=" m-2">
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
          </ol>
          <ol className=" m-2">
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
          </ol>
          <ol className=" m-2">
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
          </ol>
          <ol className=" m-2">
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
          </ol>
          <ol className=" m-2">
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
          </ol>
        </div>}

        {expanded && <div className="border-t flex p-3 ">
         
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all space-x-2 ${expanded ? " w-full md:max-w-max" : "w-0"}
          `}
          >
             <Userdropdown session={session} />
          </div>
        </div>}
      </nav>
    </aside>
  );
}
