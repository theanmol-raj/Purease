/* eslint-disable @next/next/no-img-element */
import {
  AudioLines,
  Bike,
  Bot,
  CheckCircle2,
  Mail,
  Network,
  SquareUser,
  Triangle,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

type Coreoffering = { icon: ReactElement; offeringName: string };
type Directory = { src: string; title: string; amount: number };
type Testimonial = {
  user: {
    name: string;
    designation: string;
    photoURL: string;
  };
  testimonial: string;
};

const coreofferings: Coreoffering[] = [
  { icon: <Bot />, offeringName: "Mental Wellness Companion" },
  { icon: <Bike />, offeringName: "Physical Well-being Hub" },
  { icon: <Network />, offeringName: "Therapeutic Connections" },
  { icon: <SquareUser />, offeringName: "Holistic Profiling" },
  { icon: <UserRound />, offeringName: "Engaging Lifestyle Content" },
  { icon: <AudioLines />, offeringName: "Progress Tracking and Motivation" },
] as const;
// check
const pi : number = 3.14 ;

const directory: Directory[] = [
  {
    src: "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-dumbell-healthy-wanicon-lineal-color-wanicon.png",
    title: "Fitness Challenges",
    amount: 10,
  },
  {
    src: "https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png",
    title: "Soulful Melodies",
    amount: 20,
  },
  {
    src: "https://img.icons8.com/nolan/64/microphone.png",
    title: "Podcasts",
    amount: 9,
  },
  {
    src: "https://img.icons8.com/bubbles/50/netflix.png",
    title: "Movies ",
    amount: 2,
  },
  {
    src: "https://img.icons8.com/color/48/books.png",
    title: "Books",
    amount: 5,
  },
  {
    src: "https://img.icons8.com/color/48/cosmetic-brush.png",
    title: "Creative Activities",
    amount: 10,
  },
] as const;


const testimonial : Testimonial[] = [
  {
    user: {
      name: "Alice Johnson",
      designation: "Marketing Specialist",
      photoURL: "https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg",
    },
    testimonial: "Purease has been a game-changer for me! The daily routines and insights have brought a positive shift to my mental well-being. Highly recommended!",
  },
  {
    user: {
      name: "Robert Carter",
      designation: "Fitness Enthusiast",
      photoURL: "https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg",
    },
    testimonial: "Incorporating Purease into my wellness journey has been fantastic. The fitness modules and personalized recommendations keep me motivated and on track.",
  },
  {
    user: {
      name: "Emily Davis",
      designation: "Artisan Baker",
      photoURL: "https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg",
    },
    testimonial: "As a busy baker, Purease's mindfulness exercises have become my daily ritual. It's like a breath of fresh air in my hectic schedule.",
  },
  // Add more testimonials as needed
] as const;

export default function Home() {
  console.log(pi)
  return (
    <div>
      <section className="h-screen bg-[#f2faf7] dark:bg-inherit flex items-center -translate-y-12 justify-center ">
        <div className=" p-4 md:p-8 lg:p-12 w-full max-w-max max-h-max relative ">
          <img
            className=" hidden md:block absolute bg-white rounded-md p-2 animate-spin duration-1000 -bottom-5 left-1/3 h-10"
            src="https://img.icons8.com/emoji/48/snowflake-emoji.png"
            alt="google-logo"
          />
          <img
            className=" hidden md:block absolute bg-white rounded-md p-2 animate-pulse top-1/2 -left-24 h-10"
            src="https://img.icons8.com/emoji/48/light-bulb-emoji.png"
            alt="facebook-new"
          />
          <img
            className=" hidden md:block absolute bg-white rounded-md p-2 right-0  md:-right-10 h-10"
            src="https://img.icons8.com/glyph-neue/48/C0EB00/feather.png"
            alt="skype"
          />
          <img
            className=" hidden md:block absolute bg-white rounded-md p-2 animate-ping top-0 right-0 h-10"
            src="https://img.icons8.com/color/48/trust--v1.png"
            alt="snapchat--v1"
          />

          <img
            className=" hidden md:block absolute bg-white rounded-md p-2 animate-bounce top-0 left-1/2  h-10"
            src="https://img.icons8.com/color/48/lotus.png"
            alt="amazon"
          />
          <div className="text-center space-y-3 w-full">
            <p className=" text-4xl xl:text-5xl tracking-tight max-w-4xl font-semibold">
              Elysian Horizon : Where{" "}
              <span className=" text-purple-500">Mind & Body</span> Embrace
              Serenity
            </p>
            <p className=" max-w-2xl text-sm lg:text-lg leading-6  text-gray-500 dark:text-gray-300 mx-auto">
              Unlock the Secrets to Holistic Bliss on Your Path to Inner Harmony
            </p>
            <div className=" flex border rounded-md md:rounded-lg bg-white dark:bg-white/10 h-24 w-full max-w-4xl  mx-auto"></div>
            <p className=" dark:text-gray-300 text-xs text-gray-500 font-light">
              <span className=" font-semibold dark:text-white text-black">
                Popular Searches :
              </span>{" "}
              Breathing Exercises , Meditation Songs , Sage
            </p>
          </div>
        </div>
      </section>
      <section className=" p-4 md:p-8 lg:p-0 lg:pb-28">
        <div className=" max-w-7xl mx-auto py-12 ">
          <p className=" text-center text-2xl">Empowering Your Journey</p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
            Discover the Comprehensive Features That Elevate Your Mind, Nourish
            Your Body, and Transform Your Well-Being.
          </p>
        </div>
        <div className=" grid pb-12 md:pb-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl gap-4 md:gap-5 mx-auto">
          {coreofferings.map((item: Coreoffering) => (
            <div
              key={item.offeringName}
              className="p-4 border space-y-2 rounded-md md:p-8"
            >
              <div className="p-4 rounded-lg text-purple-500 border  max-w-max mx-auto">
                {item.icon}
              </div>
              <p className=" text-sm font-medium leading-4 text-center">
                {item.offeringName}
              </p>
              <p className=" font-light text-xs text-center">
                {/* {item.count} Jobs */}
              </p>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 max-w-5xl mx-auto pb-12 md:pb-24">
          <div className=" relative">
            <button className=" text-[#23fed6] shadow-xl border p-8 rounded-full absolute z-10 bg-white rotate-90 right-5 top-5">
              <Triangle fill="#23fed6" size={16} />
            </button>
            <img
              className="h-[28rem] mx-auto md:translate-x-10 rounded-lg"
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6297360f-e363-4ea1-73be-190a94393b00/width=450/324687.jpeg"
            />
            <img
              className=" h-60 w-48 object-cover object-top hidden md:block absolute -bottom-10 right-0 border p-2 bg-white "
              src="https://staticg.sportskeeda.com/editor/2023/05/3fc33-16830048404558-1920.jpg"
            />
          </div>
          <div>
            <p className=" text-2xl font-semibold tracking-wide">
              Meet Sage.{" "}
              <span className=" text-xs bg-[#23fed6] text-white px-2 py-1 rounded-sm">
                Your Coach
              </span>
            </p>
            <p className=" text-2xl font-semibold tracking-wide">
              In the journey of holistic wellbeing.
            </p>
            <p className=" text-gray-500 py-3  dark:text-gray-200">
              Our advanced AI companion is your personalized guide to mental
              well-being. With empathetic understanding, it uplifts your mood
              and provides a secure space for open communication. This
              intelligent assistant tailors its support to your unique needs,
              fostering a journey of self-discovery and emotional balance.
            </p>
            <div className="  pt-3 text-gray-500 space-y-2 dark:text-gray-200 text-sm">
              <p className=" flex items-center ">
                <span className=" text-[#23fed6] mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                AI-guided emotional support
              </p>
              <p className=" flex items-center ">
                <span className=" text-[#23fed6] mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                Personalized mood elevation
              </p>
              <p className=" flex items-center ">
                <span className=" text-[#23fed6] mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                Confidential communication space
              </p>
            </div>
            <button className=" flex bg-[#23fed6] p-2 px-6 rounded-md mt-4 text-white">
              Chat with Sage
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2faf7] dark:bg-black pb-16 dark:pb-24">
        <div className=" max-w-7xl mx-auto py-12 md:pt-24 md:pb-16">
          <p className=" text-center text-2xl">
            Learn How AI can help you with Improving Mental Health?
          </p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard /> */}
        </div>
        <p className=" text-center pt-4  underline text-sm dark:text-gray-500 font-light">
          See more -
        </p>
      </section>
      <section className=" p-4 md:p-8 lg:py-12 xl:py-24">
        <div className=" grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 max-w-5xl mx-auto pb-12 md:pb-24">
          <div>
            <p className=" text-2xl font-semibold tracking-wide">
              Wellness Recommendations <br /> Tailored for Your Journey
            </p>
            <p className=" text-2xl font-semibold tracking-wide"></p>
            <p className=" text-gray-500 pt-3  dark:text-gray-200">
              Explore a curated selection of recommendations designed to enrich
              your well-being journey. From soothing music and insightful books
              to mindfulness apps and fitness challenges, discover a
              personalized collection of tools to enhance your mental and
              physical health.
            </p>
            <div className=" grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 pt-4 md:pt-8">
              {directory.map((item: Directory) => (
                <div
                  key={item.title}
                  className="flex items-center space-x-4 p-4 border rounded-md"
                >
                  <img
                    className=" border bg-white dark:bg-black p-2 h-12 rounded-md"
                    alt=""
                    src={item.src}
                  />
                  <div>
                    <p className=" text-sm">{item.title}</p>
                    <p className=" text-xs">{item.amount} Items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" relative">
            <button className=" text-purple-500 shadow-xl border p-8 rounded-full absolute z-10 bg-white rotate-90 right-5 top-5">
              <Triangle fill="#a855f7" size={16} />
            </button>
            <img
              className="h-[28rem] mx-auto rounded-lg object-cover max-w-xs md:max-w-sm object-left"
              src="https://img.freepik.com/premium-photo/abstract-art-woman-showing-mental-health_920128-182.jpg"
            />
            <img
              className=" h-60 hidden md:block absolute -bottom-10 left-0 border p-2 bg-white "
              src="https://img.freepik.com/premium-vector/yoga-meditation-lotus-poseyoga-meditation-lotus-poseyoga-meditation-lotus-pos_912214-20002.jpg"
            />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto py-12 md:pt-24 md:pb-16">
          <p className=" text-center text-2xl">{`Here's why you'll love Purease`}</p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
            {`Countless individuals have embraced Purease as a daily ritual. Hear firsthand what they have to share about their experiences!`}
          </p>
        </div>
        <div className=" flex flex-row mx-auto max-w-max gap-4">
          {testimonial.map((item : Testimonial) => (<div key={item.user.name} className="flex  items-center justify-center  bg-white dark:bg-inherit">
            <div className="max-w-md rounded-3xl p-px bg-gradient-to-b h-full from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white h-full dark:bg-inherit">
                <p className="text-gray-700 dark:text-white">
                  {item.testimonial}
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={item.user.photoURL}
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                      {item.user.name}
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      {item.user.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>))}
          
          {/* {loveHir.map((item: any, index: number) => (
            <div key={index} className="p-4 border space-y-2 rounded-md md:p-8">
              <div className="p-4 rounded-lg text-purple-500 border  max-w-max mx-auto">
                {item.i}
              </div>
              <p className=" text-sm font-medium leading-4 text-center">
                {item.t}
              </p>
              <p className=" text-xs text-center">{item.d}</p>
              <p className=" font-light text-xs text-center">
                Read More
              </p>
            </div>
          ))} */}
        </div>
        {/*  */}
      </section>
    </div>
  );
}
