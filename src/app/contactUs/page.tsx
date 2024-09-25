import React from 'react'

export default function page() {
    return (
        <div className='bg-black min-h-screen w-full text-white flex flex-col justify-start items-center'>
            <h2 className='text-7xl pt-40 font-bold'>Contact Us</h2>
            <p className='pt-5 w-[45%] text-center'>
            Reach out to us for any questions or support regarding our products, services, or collaborations. We’re here to assist you!
            </p>

            <form 
            className='w-full flex flex-col items-center '
            action="mailto:atrikashow02@gmail.com"
            method='POST' > 
            <div className='pt-10 w-[40%]'>
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
