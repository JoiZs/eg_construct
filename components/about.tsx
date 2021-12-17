import Image from 'next/image'
import React from 'react'

interface Props {
    
}

export const About = (props: Props) => {
    return (
        <section id='sectAbout' className='h-screen w-full relative bg-gradient-to-b from-gray-300 to-white dark:to-black dark:from-gray-800 sectscroll px-12 py-8 flex flex-col md:flex-row justify-around items-center dark:text-white'>
            <div className='absolute object-cover w-full h-full filter blur-sm opacity-10 dark:invert'>
                <Image src='/homebg/bgwp.webp' layout='fill' alt='wallpaper' />
            </div>
            <div className='md:flex-1 flex items-center w-full md:h-full py-2 overflow-hidden relative'>
                <div className='md:p-10'>
                    <h1 id='textTitle1' className='text-2xl md:text-4xl uppercase tracking-wider'>Mission</h1>
                    <h2 id='textTitle2' className='text-xs md:text-base text-justify tracking-widest font-light uppercase pl-10'>To build a high performance team that will earn financial freedom from providing high quality construction for our clients.</h2>
                </div>
            </div>
            <div className='md:flex-1 w-full h-3/4 border-t-2 opacity-80 list-none text-xs border-black dark:border-white'>
                <h1 className='text-base md:text-2xl uppercase tracking-wider'>Core Values</h1>
                <div className='flex h-full justify-evenly flex-col text-justify'>

                <li><span className='uppercase text-sm'>We are Inspiration</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We have a positive mindset and are focused on what is
                            possible.</div>
                            </li>
                <li><span className='uppercase text-sm'>We are disciplined</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We do what we say we are going to do.</div></li>
                <li><span className='uppercase text-sm'>We are accountable</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We strive for daily continuous improvements in our actions and
                            hold each other accountable.</div></li>
                <li><span className='uppercase text-sm'>We are transparent</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We openly communicate with one another.</div></li>
                <li><span>We are aligned</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We are moving in the same direction and will do whatever it takes to
                            support our team.</div></li>
                <li><span className='uppercase text-sm'>We are results oriented</span><br /><div className='border-l-2 ml-3 px-2 border-black dark:border-white'>We understand that at the end of the day we need to
                            produce quality work in a safe manner.</div></li>
                </div>
            </div>
        </section>
    )
}
