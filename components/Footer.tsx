'use client'
import { FacebookIcon, Instagram, Twitter } from 'lucide-react'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

function Footer({}: Props) {
  const pathname = usePathname();
  if (pathname.includes('content-lake')) return <></>;
  return (
    <footer className="bg-[#f2faf7] dark:bg-black" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <Logo/>
        {/* <img className="h-20" src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png" alt="Company name" /> */}
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">Elysian Horizon: Where Mind & Body Embrace Serenity</p>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <FacebookIcon/>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <Instagram/>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <Twitter/>
          </Link>
          
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Mental Health</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Chakra Test</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">OCEAN Test</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">RIASEC Test</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Childhood Trauma Test</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Advance Personality Test</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Procastination Test</Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Physical Health</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Diets & Recipes</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Yoga & Workouts</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Meditation </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Breathing Exercises</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
            <li>
                <Link href="/pricing" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Guides</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">AI Status</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">About</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Press</Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Claim</Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Privacy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-900/10 dark:border-gray-600/80 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-xs leading-5 text-gray-500 dark:text-white/50">&copy; 2020-{new Date().getFullYear()} Purease, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
  )
}

export default Footer