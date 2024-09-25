import React from 'react'

const Footer = () => {
    return (
        <div className=' text-white grid grid-cols-4 justify-center px-10 py-24 gap-2 dark:bg-grid-blue-500/[0.15] bg-grid-black/[0.2]  shadow-[inset_0px_20px_84px_29px_#000000]'>
            
            <div>
                <h2 className='py-3'>About us</h2>
                <p className='text-neutral-400'>We are dedicated to nurturing musical talent and providing a platform for artists to grow and shine. Join us on this melodious journey!</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2 className='py-3'>Quick Links</h2>
                <ul className='text-neutral-400 cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Webinars</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center'>
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

            <div>
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
