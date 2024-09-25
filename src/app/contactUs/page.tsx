"use client"
import React from 'react'
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function page() {
    return (

        <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-7xl text-xl text-white relative z-20 pt-32 font-bold")}>
      Contact Us
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 pt-5 pb-8 px-2 w-[45%] bg-black">
      Reach out to us for any questions or support regarding our products, services, or collaborations. We’re here to assist you!
      </p>
      <form 
             className='w-full flex flex-col items-center z-20'
             action="mailto:atrikashow02@gmail.com"
             method='POST' > 
             <div className=' w-[40%]'>
                 <div>
                     <input type='mail' placeholder='your Email address' 
                     required className='bg-black text-white border-[1px] p-3 mb-4 rounded-lg w-full'/>
                 </div>
                 <div>
                     <textarea placeholder='Your message' required className='bg-black text-white border-[1px] p-3 rounded-lg w-full h-32'></textarea>
                 </div>
             </div>

             <div>
                 <button type='submit'
                 className='border-2 py-2 px-4 bg-neutral-300 text-black font-bold rounded-lg mt-4'>
                     Submit
                 </button>
             </div>
             </form>
    </div>


    )
}
