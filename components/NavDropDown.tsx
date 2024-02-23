"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import { Navitem, navitems } from "./Navbar";
import Link from "next/link";
import { ElementRef, useRef } from "react";
import Userdropdown from "./Userdropdown";
import { Session } from "next-auth";
import { appNavigation } from "@/utils/constants";

export default function Sidebar({ session }: { session: Session | null }) {
  return (
    <Sheet>
      <SheetTrigger className="">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <Logo isLink height={12} width={50} />
        </SheetHeader>
        <div className="flex-1 px-4">
          <div className="md:hidden  gap-2 flex flex-col overflow-y-scroll">
            {appNavigation.map((item) => (
              <div
                className=" text-sm flex items-center space-x-3 border px-4 rounded-md py-2.5"
                key={item.option}
              >
                <img alt="" className="h-8 w-8" src={item.icon as string} />
                <p>{item.option}</p>
              </div>
            ))}
            <div className=" bg-[#23fed6] text-sm flex items-center space-x-3 border px-4 rounded-md py-2.5">
              <img
                alt=""
                className="h-12 p-1 bg-white w-12 object-cover rounded-full object-top"
                src="https://static.zerochan.net/Sage.%28Valorant%29.full.4051819.jpg"
              />
              <p className=" font-semibold">Sage</p>
            </div>
            <div className=" bg-gray-100 dark:bg-gray-800 text-sm flex items-center space-x-3 border px-4 rounded-md py-2.5">
              <img
                alt=""
                className="h-8 p-1 bg-white w-8 object-cover rounded-full object-top"
                src="https://img.icons8.com/color/48/medical-doctor.png"
              />
              <p>Therapist</p>
            </div>
            <div className=" bg-gray-100 dark:bg-gray-800 text-sm flex items-center space-x-3 border px-4 rounded-md py-2.5">
              <img
                alt=""
                className="h-8 p-1 bg-white w-8 object-cover rounded-full object-top"
                src="https://img.icons8.com/color/48/plant-under-sun--v1.png"
              />
              <p>Health Coach</p>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Userdropdown session={session} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
