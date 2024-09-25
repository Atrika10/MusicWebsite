import React from 'react'

const Footer = () => {
    return (
        <div className=' text-white px-10 py-24  dark:bg-grid-blue-500/[0.15] bg-grid-black/[0.2]  shadow-[inset_0px_20px_84px_29px_#000000] grid justify-center grid-cols-1
        gap-10
        sm:grid-cols-2  sm:gap-20
        md:grid-cols-4 md:gap-2'>
            
            <div className='flex flex-col items-center sm:items-start'>
                <h2 className='py-3'>About us</h2>
                <p className='text-neutral-400'>We are dedicated to nurturing musical talent and providing a platform for artists to grow and shine. Join us on this melodious journey!</p>
            </div>

            <div className='flex flex-col justify-center items-center sm:items-start md:items-center'>
                <h2 className='py-3'>Quick Links</h2>
                <ul className='text-neutral-400 cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Webinars</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center sm:items-start md:items-center'>
                <h2 className='py-3'>Follow Us</h2>
                <ul className=
                'text-neutral-400 cursor-pointer'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                    <li>LinkedIn</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center sm:items-start'>
                <h2 className='py-3'>Contact Us</h2>
                <div className='text-neutral-400 flex flex-col justify-center'>
                <p>Email: info@musicwebsite.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 123 Music Lane, Melody City, India</p>
                </div>
               
            </div>
        </div>
    )
}

export default Footer
