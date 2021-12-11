import Link from 'next/link'
import React from 'react'

interface Props {
    
}

export const About = (props: Props) => {
    return (
        <section id='sectAbout' className='h-screen w-full relative bg-white  dark:bg-black sectscroll px-12 py-8 flex flex-col md:flex-row justify-between items-center dark:text-white'>
            <div className='md:flex-1 w-full h-1/2 md:h-full p-10 overflow-hidden relative'>
                <div className='absolute z-10'>
                    <h1 id='textTitle1' className='text-5xl uppercase tracking-wider'>Blogs</h1>
                    <h2 id='textTitle2' className='text-4xl tracking-widest font-thin uppercase pl-4'>Subtitle</h2>
                    <Link href='/' passHref><button className='bg-red-600 text-white dark:text-black  p-2 hover:opacity-50'>Explore More</button></Link>
                </div>
                    <div id='circle1' className='bg-gray-400 dark:bg-gray-100  absolute w-40 h-40 md:w-500cir md:-left-52 md:h-500cir md:-bottom-52 -bottom-10 -left-10 z-0 opacity-50 rounded-full'></div>
                    <div id='circle2' className='bg-gray-500  dark:bg-gray-200 absolute w-60 h-60 md:w-600cir md:-left-40 md:h-600cir md:-bottom-40 -bottom-16 -left-16 z-0 opacity-50 rounded-full'></div>
            </div>
            <div className='md:flex-1 w-full h-3/4 border-t-2 grid grid-cols-2 grid-rows-2 gap-1 opacity-80'>
                    <div className='relative cursor-pointer overflow-hidden'>
                        <span className='absolute bg-gray-600 dark:bg-gray-300 text-white dark:text-black italic uppercase bottom-0 w-full z-10'>title</span>
                        <img className='absolute object-cover h-full w-full' src="https://i0.wp.com/www.momoafrica.com/wp-content/uploads/2018/06/African-culture.1.jpg?resize=572%2C376&ssl=1" alt="about" height={'100%'} /></div>
                    <div className='relative cursor-pointer overflow-hidden'>
                        <span className='absolute bg-gray-600 dark:bg-gray-300 text-white dark:text-black italic uppercase bottom-0 w-full z-10'>title</span>
                        <img className='absolute h-full w-full object-cover' src="https://www.worldatlas.com/r/w1200/upload/d2/d7/43/shutterstock-657091870.jpg" alt="about" height={'100%'} /></div>
                    <div className='col-span-2 cursor-pointer relative overflow-hidden'>
                        <span className='absolute bg-gray-600 dark:bg-gray-300 text-white dark:text-black italic uppercase bottom-0 w-full z-10'>title</span>
                        <img className='absolute object-cover h-full w-full' src="https://emerging-europe.com/wp-content/uploads/2021/04/ip1-photo-3103-990x556.jpeg" alt="about" /></div>
            </div>
        </section>
    )
}
