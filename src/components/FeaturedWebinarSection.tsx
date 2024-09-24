'use client'
import React from 'react';
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { AuroraBackground } from "./ui/aurora-background";

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
    <div className='bg-red-800'> 
    <AuroraBackground className='mt-0 p-0'>
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
    
    <div className='mt-5 pt-32 pb-20 px-8 flex flex-col justify-center items-center  text-white '>
        {/* for heading */}
      <div>
        <p className='text-center text-2xl'>Featured Webinars </p>
        <h2 className='text-[3rem]'>Enhance Your Musical Journey</h2>
      </div>

      {/* content box */}
      <div>
        <HoverEffect items={webinardata}/>
      </div>
    </div>
    </motion.div>
    </AuroraBackground>

    </div>
    
  )
}
