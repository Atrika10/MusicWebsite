'use client'
import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";

const webinardata = [
  {
    "title": "Music Marketing 101",
    "description": "Learn the basics of promoting your music online and building a fanbase.",
    "link": "https://example.com/webinar1"
  },
  {
    "title": "Songwriting Secrets",
    "description": "Discover techniques to enhance your songwriting skills and creativity.",
    "link": "https://example.com/webinar2"
  },
  {
    "title": "Home Studio Setup",
    "description": "Tips and tricks for setting up a professional home recording studio.",
    "link": "https://example.com/webinar3"
  },
  {
    "title": "Live Performance Tips",
    "description": "Improve your stage presence and engage with your audience effectively.",
    "link": "https://example.com/webinar4"
  },
  {
    "title": "Music Production Basics",
    "description": "An introduction to music production, including software and techniques.",
    "link": "https://example.com/webinar5"
  },
  {
    "title": "Social Media for Musicians",
    "description": "Maximize your social media presence to grow your music career.",
    "link": "https://example.com/webinar6"
  }
]


export default function FeaturedWebinarSection() {
  return (
    <div>

      <div className='mt-5 pt-32 pb-20 px-8 flex flex-col justify-center items-center  text-white '>
        {/* for heading */}
        <div>
          <p className='text-center text-xl sm:text-2xl text-cyan-300 '>Featured Webinars </p>
          <h2 className='
           bg-gradient-to-r from-pink-100 to-slate-800
          text-transparent bg-clip-text font-bold tracking-wide text-[30px] leading-[35px] text-center mt-3 
          sm:text-[3rem] sm:leading-normal md:mt-0'>
            Enhance Your Musical Journey
            </h2>
        </div>

        {/* content box */}
        <div>
          <HoverEffect items={webinardata} />
        </div>
      </div>

    </div>

  )
}
