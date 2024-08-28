"use client";
import Link from 'next/link'
import React from 'react'
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { Spotlight } from './ui/Spotlight';

export default function HeroSection() {
  return (
    <>
      <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-32 md:-top-20 lg:-top-28"
        fill="cyan"
      />
        <div className="p-4 relative z-10 w-full text-center flex flex-col items-center justify-center">
          <div
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >Master The Art of Music</div>
          <div>
            <p
              className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential. </p>
          </div>

          <div>
            <Link href="/courses">
              <button className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
