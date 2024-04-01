
import Logo from "@/components/Logo";
import SIgnInContainer from "@/components/SIgnInContainer";
import { authOptions } from "@/services/auth/auth";
import { getServerSession } from "next-auth";

import React from "react";

type Props = {};

async function page({}: Props) {
     
const session = await getServerSession(authOptions);

  return (
    <main className="bg-white dark:bg-[#212121] rounded-lg md:py-5">
        <div className=" fixed top-4 left-4"><Logo isLink height={40} width={60}  /></div>
      <div className="container flex flex-col mx-auto bg-white dark:bg-black  rounded-lg py-12 md:pb-0 md:my-5">
        <div className="flex justify-center   my-auto xl:gap-14 lg:justify-normal md:gap-5 ">
          <div className="flex items-center justify-center w-full lg:p-12">
            <SIgnInContainer session={session} />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex flex-wrap  my-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-sm text-slate-500 dark:text-slate-300 py-1">
            Holistic Health Platform {" "}
            <a
              href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-white"
              target="_blank"
            >
              Purease
            </a>{" "}
            from {" "}
            <a
              href="https://www.loopple.com"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-white"
              target="_blank"
            >
              Haoleaf INC
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
