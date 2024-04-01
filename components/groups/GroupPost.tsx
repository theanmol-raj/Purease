import { Heart, MessageCircle } from "lucide-react";
import React from "react";

type Props = {};

function GroupPost({}: Props) {
  return (
    <div className=" rounded-md overflow-hidden border w-full ">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt="profilepic"
            />
          </div>
          <span className="pt-1 ml-2 font-bold text-sm">ADHD</span>
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <img
        className="w-full bg-cover"
        src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
      />
      <div className="px-3 pb-2">
        <div className="pt-2 space-x-2 flex">
          <Heart />
          <MessageCircle />
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="font-semibold mr-2">Adhd</span> Lord of the
            Rings is my favorite film-series. One day {`I'll`} make my way to New
            Zealand to visit the Hobbiton set!
          </div>
        </div>
        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
          View all 14 comments
        </div>
        <div className="mb-2">
          <div className="mb-2 text-sm">
            <span className="font-medium mr-2">razzle_dazzle</span> Dude! How
            cool! I went to New Zealand last summer and had a blast taking the
            tour! So much to see! Make sure you bring a good camera when you go!
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPost;
