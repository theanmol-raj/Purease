import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

type Props = {};

function ChatInput({}: Props) {
  return (
    <div className="overflow-hidden bg-white border-gray-400 dark:border-inherit dark:bg-black [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-medium flex-grow relative border border-token-border-medium dark:text-white rounded-2xl bg-token-main-surface-primary">
      <textarea
        id="prompt-textarea"
        tabIndex={0}
        data-id="root"
        rows={1}
        placeholder="Message Sage here ..."
        className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
        // style={{"height: 44px; overflow-y: hidden;"}}
      ></textarea>
      <button
        // disabled=""
        className="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3"
      >
        <span className="" data-state="closed">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white dark:text-black"
          >
            <path
              d="M7 11L12 6L17 11M12 18V7"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default ChatInput;
