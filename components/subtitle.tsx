import React, { useContext, useState } from 'react'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { SectionContext } from './sectConte';

interface Props {
    
}
export const Subtitle = (props: Props) => {
    const [section, setSection] = useContext(SectionContext)
    let sectTop = 0

    if(section[0] ==1 ){
        sectTop = 0;
    }else if(section[1] ==1 ){
        sectTop = 8;
    }else if(section[2] ==1 ){
        sectTop = 16;
    }else if(section[3] ==1 ){
        sectTop = 24;
    }
    
    return (
        <div className='fixed w-full text-xs px-2 h-8 list-none leading-8 overflow-hidden z-10'>
            <ChangeHistoryIcon fontSize='small' className='transform rotate-90' />
            <h1 className={`italic pl-6 uppercase tracking-widest absolute transition-all -top-${sectTop}`}>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </h1>
        </div>
    )
}
