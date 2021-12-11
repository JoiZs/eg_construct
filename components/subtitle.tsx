import React, { useContext, useState } from 'react'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { SectionContext } from './sectConte';
import gsap from 'gsap/all';

interface Props {
    
}
export const Subtitle = (props: Props) => {
    const [section, setSection] = useContext(SectionContext)
    if(section[0] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'0rem', ease:'power2.out'})
    }else if(section[1] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-2rem', ease:'power2.out'})

    }else if(section[2] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-4rem', ease:'power2.out'})

    }else if(section[3] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-6rem', ease:'power2.out'})

    }
    
    return (
        <div className='fixed w-full text-xs px-2 h-8 list-none leading-8 overflow-hidden z-10 top-2'>
            <ChangeHistoryIcon fontSize='small' className='transform rotate-90' />
            <h1 id='subti' className={`italic pl-6 uppercase tracking-widest absolute transition-all top-0`}>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </h1>
        </div>
    )
}
