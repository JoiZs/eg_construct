import { Menu } from '@mui/icons-material'
import gsap from 'gsap'
import React, { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from './darkModeConte'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface Props {
    
}

export const MenuB = (props: Props) => {
    const [menuTog, setMenuTog] = useState(false)
    const [darkModeOn, setDarkModeOn] = useContext(DarkModeContext) 
    const [darkMode, setDarkMode] = useState([<LightModeIcon id='darkIcon' key='light' />, <DarkModeIcon id='darkIcon' key='dark' />])
   
    const DarkModeToggle = ()=>{
        gsap.fromTo('#darkIcon', {rotation:0},{rotation:360}).then(()=>{

            if(darkModeOn === 0){
                setDarkModeOn(1)
                document.querySelector('html')!.className='dark'
                
            }else{
                setDarkModeOn(0)
                document.querySelector('html')!.className=''
    
            }
        })
    }
    const toggleMenu = ()=>{
    let togValue = 0;
    setMenuTog(!menuTog)
    if(menuTog === false){
        togValue = 90;
        gsap.to('#menuDiv', {display:'flex', translateY:'2rem', top:8 ,  ease:'power4.out', duration: 2, opacity:1})
        gsap.to('#menuList', {display:'flex', translateY:'0rem',  ease:'power4.out', duration: 2, opacity:1})
        gsap.to('#sectionColl', {filter:'blur(3px)'})
    }else{
        togValue = 0;
        gsap.to('#menuDiv', {display:'none', translateY:'-10rem', ease:'power4.out', duration: 2, opacity:0})
        gsap.to('#sectionColl', {filter:'blur(0px)'})

    }
    gsap.to('#burgerMenu', {rotation:togValue})
   }
   const navTo = (e:any, loc:number)=>{
        const clientHt:number = document.getElementById('sectionColl')!.clientHeight;
        gsap.fromTo(`#${e.currentTarget.id}`, {scale:0.95, },{scale:1, ease:'power2.inOut', duration:0.5})
        switch (loc){
            case 0:
                document.getElementById('sectionColl')!.scrollTo(0, 0)
            break;
            case 1:
                document.getElementById('sectionColl')!.scrollTo(0, clientHt)

            break;
            case 2:
                document.getElementById('sectionColl')!.scrollTo(0, clientHt*2)
            break;
            case 3:
                document.getElementById('sectionColl')!.scrollTo(0, clientHt*3)
            break;
        }
   }
    return (
        <div className='fixed flex items-center right-0 text-xs px-2 h-8 list-none md:hidden z-10'>
            <span onClick={toggleMenu}><Menu id='burgerMenu' className='dark:text-white' /></ span>
            <div id='menuDiv' className='fixed -top-40 w-20 h-28 right-14px'>
                <div id='menuList'  className='hidden justify-around text-right w-full transform px-2 h-full border-r-2 border-black dark:border-white md:hidden flex-col list-none tracking-widest dark:text-white leading-5'>
                    <li onClick={DarkModeToggle} >{darkMode[darkModeOn]}</li>
                    <li id='listHome' onClick={(e)=>navTo(e, 0)}>Home</li>
                    <li id='listServ' onClick={(e)=>navTo(e, 1)}>Services</li>
                    <li id='listAbout' onClick={(e)=>navTo(e, 2)}>About</li>
                    <li id='listContact' onClick={(e)=>navTo(e, 3)}>Contact</li>
                </div>
            </div>
        </div>
    )
}
