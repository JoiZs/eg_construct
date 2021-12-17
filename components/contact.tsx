import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Logo from '../assets/img/logo.svg'
import LogoDark from '../assets/img/logodark.svg'
import { DarkModeContext } from './darkModeConte'

interface Props {
    
}

export const ContactUs = (props: Props) => {
    const [logoMode, setLogoMode] = useContext(DarkModeContext)
    const LogoSel = [Logo, LogoDark]
    return (
        <section id='sectCont' className='h-screen w-full relative bg-white  dark:bg-black sectscroll pt-8 flex flex-col justify-between items-center dark:text-white'>
            <div className=' w-screen h-full relative overflow-hidden z-10'>
                <div id='contUsDiv' className='z-10 rounded-sm backdrop-filter backdrop-blur-md absolute h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/3 '>
                    <div className='w-full h-full rounded-md flex justify-between flex-col'>
                        <input className='bg-transparent outline-none' type="text" placeholder='First Name' />
                        <input className='bg-transparent outline-none' type="text" placeholder='Last Name' />
                        <input className='bg-transparent outline-none' type="text" placeholder='Email' />
                        <textarea className='bg-transparent outline-none' placeholder='Message' id="w3review" name="w3review" rows={4} cols={50} />
                        <button className='bg-gray-800 dark:bg-white text-white dark:text-black  p-2 hover:opacity-50'>Send</button>
                    </div>
                </div>
                    <div className='absolute z-0 top-1/2 left-0 text-7xl uppercase opacity-30'><span>Get in touch</span></div>
                    <div className='bg-gray-800 dark:bg-gray-100 opacity-10 z-0 w-500cir h-500cir absolute rounded-full  left-1/2 top-0 transform rotate-45'></div>
                    <div className='bg-gray-800 dark:bg-gray-100 opacity-10 z-0 w-500cir h-500cir absolute rounded-full  left-1/2 translate-x-10 translate-y-10 top-0 transform rotate-45'></div>
            </div>
            <div className=' w-full h-1/4 flex flex-row  items-end bg-gray-100 dark:bg-gray-800 uppercase relative z-10'>
                <div className='w-32 h-full hidden md:flex px-2'>
                        <Image src={LogoSel[logoMode]} alt=" " />
                    </div>
                <div className='flex-1 h-full items-center flex flex-col justify-evenly px-6 '>
                    <div className='w-16 h-1/4 md:hidden flex'>
                        <Image src={LogoSel[logoMode]} alt=" " />
                    </div>
                    <span className='text-tiny md:text-sm opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='text-tiny md:text-xs'>© 2021 McKENZIE. ALL RIGHTS RESERVED.</span>
                    <span className='text-tiny md:text-xs'> terms and policy</span>
                </div>
                <div className='flex-1 flex flex-col justify-evenly h-full px-2 list-none text-center pr-6 md:pr-12'>
                    <span className='opacity-70 h-1/2 flex justify-around flex-col text-tiny md:text-sm'>
                        <li>Washington DC Office</li>
                        <li>16 Florida Ave NE</li>
                        <li>Washington, DC 20002</li>
                        <li>202.506.2074</li>
                    </span>
                </div>
            </div>
        </section>
    )
}
