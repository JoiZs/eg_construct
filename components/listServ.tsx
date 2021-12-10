import React, { useState } from 'react'
import gsap from 'gsap/all';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    title:string;
    photo?:string;
    detail:string;
}

export const ListServ = (props: Props) => {
    
    return (
        <div className='h-full whitespace-normal  flex md:justify-center items-center text-justify flex-col'>
                <div className='w-full md:w-3/4 flex justify-center items-center'>
                    {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg"
                    alt="Landscape picture"
                    layout='fill'
                    /> */}
                    <img src={`https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg` || props.photo } alt="Strawberry" className='w-full md:w-1/2' />
                </div>
                <div className='flex h-3/4 md:h-1/4 justify-around flex-col items-center'>
                    <h1 className='text-center  w-full md:w-1/2 text-5xl uppercase'>{props.title}</h1>
                    <span className='text-xs  md:w-1/2'>{props.detail}</span>
                    <Link href='/' passHref><button className='bg-red-600 text-white dark:text-black p-2 hover:opacity-50'>Explore More</button></Link>
                </div>
            </div>
    )
}
