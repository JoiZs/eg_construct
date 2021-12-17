import React from 'react'
import { ListServ } from './listServ'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ConstructionIcon from '@mui/icons-material/Construction';
import gsap, { ScrollToPlugin } from 'gsap/all';
import { useState } from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollToPlugin)
interface Props {
    
}

  
export const Services = (props: Props) => {
    const [selectContent, setSelectContent] = useState([1,0,0,0])
    const optIcon = [50,100]
    const clickContent = (listID:string)=>{
        const servDivWd = Math.round(document.querySelector('#servDivDetail1')!.getBoundingClientRect().width);
        switch (listID){
            case 'servList1':
                setSelectContent([1,0,0,0])
                gsap.fromTo('#servList1', {opacity:0.5, translateY:5}, {duration:0.5,opacity:1,translateY:0, ease:'circ' })
                    document.getElementById('servDivDetail')!.scrollTo(-servDivWd,0)
            break;
            case 'servList2':
                setSelectContent([0,1,0,0])
                gsap.fromTo('#servList2', {opacity:0.5, translateY:5}, {duration:0.5,opacity:1,translateY:0, ease:'circ' })
                    document.getElementById('servDivDetail')!.scrollTo(servDivWd, 0)
            break;
            case 'servList3':
                setSelectContent([0,0,1,0])
                gsap.fromTo('#servList3', {opacity:0.5, translateY:5}, {duration:0.5,opacity:1,translateY:0, ease:'circ' })
                    document.getElementById('servDivDetail')!.scrollTo(servDivWd*2,0)
                
            break;
            case 'servList4':
                setSelectContent([0,0,0,1])
                gsap.fromTo('#servList4', {opacity:0.5, translateY:5}, {duration:0.5,opacity:1,translateY:0, ease:'circ' })
                    document.getElementById('servDivDetail')!.scrollTo(servDivWd*3,0)
            break;

        }
    }
    return (
        <section id='sectServ' className='h-screen bg-gradient-to-b from-white to-gray-300 md:justify-evenly dark:to-gray-800 dark:from-black relative w-full sectscroll flex flex-col md:flex-row px-12 py-8 items-center dark:text-white'>
            <div className='absolute object-cover w-full h-full filter blur-sm opacity-10 dark:invert'>
                <Image src='/homebg/bgwp2.webp' layout='fill' alt='wallpaper' />
            </div>
            <div id='servList' className='list-none w-full md:w-1/3 relative uppercase h-1/6 md:h-1/2 flex flex-col-reverse md:flex-row justify-center'>
                <div  className='tracking-wider text-tiny md:text-sm w-full flex flex-row md:flex-col justify-evenly md:justify-around'>
                    <li id='servList1' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList1')}>Service 1</li>
                    <li id='servList2' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList2')}>Service 2</li>
                    <li id='servList3' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList3')}>Service 3</li>
                    <li id='servList4' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList4')}>Service 4</li>
                </div>
                <div className='flex flex-row md:flex-col justify-evenly md:justify-around md:border-r-2 border-black dark:border-white'>
                    <li onClick={()=>clickContent('servList1')} className={`opacity-${optIcon[selectContent[0]]} px-4 md:px-2`}>
                    <DesignServicesIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList2')} className={`opacity-${optIcon[selectContent[1]]} px-4 md:px-2`}>
                    <DesignServicesIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList3')} className={`opacity-${optIcon[selectContent[2]]} px-4 md:px-2`}>
                    <DesignServicesIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList4')} className={`opacity-${optIcon[selectContent[3]]} px-4 md:px-2`}>
                    <DesignServicesIcon fontSize='small'  />
                    </li>
                    
                </div>
            </div>
            <div id='servDivDetail' className='w-full overflow-x-scroll h-full md:h-3/4 whitespace-nowrap scrollmandx'>
                <div id='servDivDetail1' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Service 1' />
                </div>
                <div id='servDivDetail2' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Service 2' />
                </div>
                <div id='servDivDetail3' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Service 3' />
                </div>
                <div id='servDivDetail4' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Service 4' />
                </div>
            </div>
            <div id='servTrust' className='h-1/2 py-10 capitalize md:w-1/2  px-2 font-extralight'>
                Your trusted construction partner for:
                <div className='flex h-3/4 flex-col text-xs justify-around uppercase italic md:h-full'>
                    <span className='border-black dark:border-white md:border-l-2 text-center md:text-left'>
                        <ConstructionIcon />Design Build
                    </span>
                    <span className='border-black dark:border-white md:border-l-2 text-center md:text-left'>
                        <ConstructionIcon />Design Bid Build
                    </span>
                </div>
                </div>
        </section>
    )
}
