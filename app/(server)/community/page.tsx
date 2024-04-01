import Logo from "@/components/Logo";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className=" ">
         
      <p className=" text-center pt-12 font-medium text-2xl">
        All of Your Groups
      </p>
      <p className=" text-sm font-light pb-4 text-gray-500 text-center">
        Therapist- led| 4- 6 sessions | Online
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">

        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-full" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
      </div>




      <p className=" text-center pt-12 font-medium text-2xl">
        More Communities to Join
      </p>
      <p className=" text-sm font-light pb-4 text-gray-500 text-center">
        Therapist- led| 4- 6 sessions | Online
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">

        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
        <div className=" space-y-2">
            <img src="https://www.soulup.in/cdn/shop/files/LIVEGROUPIMAGES_DONOTEDITHERE_79.png" className=" rounded-md" />
            <p className=" text-lg text-center">Greif or Loss</p>
            <p className=" text-xs font-light text-gray-800 text-center dark:text-gray-300">Group that offers a safe space to express grief and feel less isolated.</p>
        </div>
      </div>
    </div>
  );
}

export default page;
