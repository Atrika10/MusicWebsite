"use client"
import React from 'react'
import data from '@/data/music-courses.json'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        // image: "/courses/guitar.jpg" 
}
export default function FeaturedCardSection() {
  const featuredCourses = data.courses.filter((course :Course) => course.isFeatured)
  
  return (
    <div className=' mt-10 pb-10 text-white flex justify-center items-center flex-col'>
     <div className='flex flex-col mb-10 justify-center items-center gap-1 sm:gap-3 md:gap-6 '>
        <p className=' text-purple-300 text-2xl sm:text-3xl 
        md:text-5xl'>
          FEATURED COURSES
          </p>
        <p className='text-cyan-400 text-xl  italic sm:text-2xl md:text-3xl'>Learn With the Best</p>
     </div>

     <div className=' overflow-hidden p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8'>
        {/* here each course will be displayed */}
        {featuredCourses.map((course:Course)=>(
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient>
              <div className='bg-zinc-900 rounded-3xl flex flex-col justify-center items-start p-5'>
              <p className='underline text-neutral-200 text-xl font-bold'>
                {course.title}
              </p>
              <p className='pt-2 text-neutral-400'>
                {course.description}
              </p>
              <p className='pt-2'>
                ${course.price} 
                </p>
                <button className='border-0 rounded-lg px-4 py-2 mt-5  bg-black'>
                  Enroll Now
                </button>
              </div>
            </BackgroundGradient>

          </div>
        ))}
        

     </div>

     <div className='border-2 py-2 px-4 rounded-lg border-neutral-400'>
      <Link href="/">
      View More Courses
      </Link>
      </div>
    </div>
  )
}

