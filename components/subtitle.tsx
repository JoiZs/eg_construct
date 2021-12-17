import React, { useContext, useState } from 'react'
import { SectionContext } from './sectConte';
import gsap from 'gsap/all';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
    
}
export const Subtitle = (props: Props) => {
    const [section, setSection] = useContext(SectionContext)
    if(section[0] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'0rem', ease:'power2.out'})
        gsap.to('#settingIcon',{duration:0.5, rotation:0, ease:'power2.inOut'})
    }else if(section[1] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-2rem', ease:'power2.out'})
        gsap.to('#settingIcon',{duration:0.5, rotation:60, ease:'power2.inOut'})

    }else if(section[2] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-4rem', ease:'power2.out'})
        gsap.to('#settingIcon',{duration:0.5, rotation:120, ease:'power2.inOut'})

    }else if(section[3] ==1 ){
        gsap.to('#subti',{duration:0.2, y:'-6rem', ease:'power2.out'})
        gsap.to('#settingIcon',{duration:0.5, rotation:180, ease:'power2.inOut'})

    }
    
    return (
        <div className='fixed w-full text-xs px-2 h-8 list-none leading-8 overflow-hidden z-10 top-2'>
           <SettingsIcon id='settingIcon' fontSize='small' />
            <h1 id='subti' className={`italic pl-6 uppercase tracking-widest absolute transition-all top-0`}>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </h1>
        </div>
    )
}
