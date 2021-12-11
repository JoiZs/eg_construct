import React from 'react'
import { ListServ } from './listServ'
import PublicIcon from '@mui/icons-material/Public';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import FlightIcon from '@mui/icons-material/Flight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import gsap, { ScrollToPlugin } from 'gsap/all';
import { useState } from 'react';

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
        <section id='sectServ' className='h-screen bg-white  dark:bg-black relative w-full sectscroll flex flex-col md:flex-row px-12 py-8 items-center dark:text-white'>
            <div id='servList' className='list-none w-full md:w-1/2 relative uppercase h-1/6 md:h-1/2 flex flex-col-reverse md:flex-row justify-center'>
                <div  className='tracking-wider text-tiny md:text-sm w-full flex flex-row md:flex-col justify-evenly md:justify-around'>
                    <li id='servList1' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList1')}>golf</li>
                    <li id='servList2' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList2')}>africa</li>
                    <li id='servList3' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList3')}>private jet</li>
                    <li id='servList4' className={`cursor-pointer h-6 w-14 md:w-full flex items-center justify-center md:justify-end md:text-right`} onClick={()=>clickContent('servList4')}>Artic</li>
                </div>
                <div className='flex flex-row md:flex-col justify-evenly md:justify-around md:border-r-2 border-black dark:border-white'>
                    <li onClick={()=>clickContent('servList1')} className={`opacity-${optIcon[selectContent[0]]} px-4 md:px-2`}>
                    <GolfCourseIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList2')} className={`opacity-${optIcon[selectContent[1]]} px-4 md:px-2`}>
                    <PublicIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList3')} className={`opacity-${optIcon[selectContent[2]]} px-4 md:px-2`}>
                    <FlightIcon fontSize='small'  />
                    </li>
                    <li onClick={()=>clickContent('servList4')} className={`opacity-${optIcon[selectContent[3]]} px-4 md:px-2`}>
                    <AcUnitIcon fontSize='small'  />
                    </li>
                    
                </div>
            </div>
            <div id='servDivDetail' className='w-full transform translate-x-20 overflow-x-scroll h-full whitespace-nowrap scrollmandx'>
                <div id='servDivDetail1' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Golf' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div id='servDivDetail2' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Africa' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div id='servDivDetail3' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Private Jet' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div id='servDivDetail4' className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='Artic' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
            </div>
        </section>
    )
}
