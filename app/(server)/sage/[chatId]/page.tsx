import ChatInput from "@/components/messageParts/ChatInput";
import ChatWindow from "@/components/messageParts/ChatWindow";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex-1  dark:bg-inherit y-2">
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/fall.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" w-full h-full flex flex-col  max-w-3xl mx-auto px-4   ">
        <ChatWindow />
        <div className=" mt-2 mb-4 w-full">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default page;
