'use client'
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { session : Session | null}

function SIgnInContainer({session}: Props) {
    if(session) redirect('/sage') ;
  return (
    <div className="flex items-center xl:p-10">
              <div className="flex flex-col pb-6 text-center bg-white dark:bg-black rounded-3xl">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <button onClick={()=>signIn('google')} className="flex items-center bg-gray-200 dark:bg-gray-900 justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Sign in with Google
                </button>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label className="mb-2 text-sm text-start text-grey-900">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex border  items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label className="mb-2 text-sm text-start text-grey-900">
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex border  items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                  Sign In
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet?{" "}
                  <a
                    href="javascript:void(0)"
                    className="font-bold text-grey-700"
                  >
                    Create an Account
                  </a>
                </p>
              </div>
            </div>
  )
}

export default SIgnInContainer