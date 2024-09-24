'use client';
import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      "id": 1,
      "name": "Alex Johnson",
      "designation": "Vocal Coach",
      "image": "/img1.jpg"
    },
    {
      "id": 2,
      "name": "Samantha Lee",
      "designation": "Music Producer",
      "image": "/img2.jpg"
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "designation": "Guitar Instructor",
      "image": "/img3.jpg"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "designation": "Piano Teacher",
      "image": "/img4.jpg"
    },
    {
      "id": 5,
      "name": "Chris Martin",
      "designation": "Drum Instructor",
      "image": "/img5.jpeg"
    }
  ]
  
export default function TeamMembers() {
  return (
    <div className='text-white mt-10 pt-10 pb-16' >
        <div className='flex flex-col justify-center items-center'>

        <div
        className='text-6xl py-5'
        >Introducing Our Instructors</div>
        <div className='text-xl pb-12'
        >Guiding Tomorrow’s Stars with Dedication and Passion</div>
        
        </div>
        <div className='flex flex-row items-center justify-center w-full'>
            <AnimatedTooltip items={people}/>
        </div>
    </div>
  )
}
