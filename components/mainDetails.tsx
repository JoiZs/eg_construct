import React, { useContext, useState } from 'react'
import { DarkModeContext } from './darkModeConte'

interface Props {
    
}

export const MainHome = (props: Props) => {
    const [darkModeOn, setDarkModeOn] = useContext(DarkModeContext);
    return (
        
        <section id='sectHome' className='h-screen relative w-full sectscroll py-8 flex justify-center items-center dark:text-white'>
            
            <div id='homeDiv' className='absolute z-20 w-3/4 md:w-1/2 border-l-2 border-black dark:border-white overflow-hidden' >
                <h1 id='homeTitle' className='text-4xl uppercase italic md:text-8xl font-extrabold text-left tracking-wider opacity-0' >Construction</h1>
                <p id='homeSubt' className=' text-right opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
                <video id='bgVdo' preload="auto" playsInline={true} className='fixed filter brightness-200 z-0 h-screen w-screen object-cover' autoPlay loop muted >
                    <source src='homebg/main.webm' type='video/webm' />
                </video>
            <div className='absolute z-20 bottom-10'>
                {darkModeOn===1?
                                <svg onClick={()=>document.getElementById('sectionColl')!.scrollTo(0, document.getElementById('sectionColl')!.clientHeight)} className='animate-bounce cursor-pointer' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="40px" height="40px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                <path fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M48,17c0-8.836-7.164-16-16-16S16,8.164,16,17v30
                                    c0,8.836,7.164,16,16,16s16-7.164,16-16V17z"/>
                                <line fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="10" x2="32" y2="18"/>
                                </svg>: 
                                <svg onClick={()=>document.getElementById('sectionColl')!.scrollTo(0, document.getElementById('sectionColl')!.clientHeight)} className='animate-bounce cursor-pointer' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="40px" height="40px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                <path fill="none" stroke="#000" strokeWidth="2" strokeMiterlimit="10" d="M48,17c0-8.836-7.164-16-16-16S16,8.164,16,17v30
                                    c0,8.836,7.164,16,16,16s16-7.164,16-16V17z"/>
                                <line fill="none" stroke="#000" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="10" x2="32" y2="18"/>
                                </svg>

                }
            </div>
        </section>
    )
}
