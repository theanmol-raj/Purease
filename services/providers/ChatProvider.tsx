"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Home,
  LayoutList,
  SquarePen,
  UserRound,
} from "lucide-react";
import { SidebarContext } from "@/utils/context";
import Link from "next/link";

function ChatProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={[expanded, setExpanded]}>
      <section className=" h-screen w-screen flex">
        <Sidebar>
          <h1>Hello</h1>
        </Sidebar>

        <div className=" relative w-0 ">
          {!expanded && (
            <Link href={'/sage'} className="p-3 rounded-full bg-white dark:bg-black z-10 border  text-gray-500 dark:text-white  absolute top-2 mt-2 left-2">
              <SquarePen size={20} />
            </Link>
          )}
          <button
            className="  absolute top-1/2 -translate-y-1/2 z-50 text-white "
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        {children}
      </section>
    </SidebarContext.Provider>
  );
}

export default ChatProvider;
