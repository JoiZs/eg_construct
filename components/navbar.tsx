import React, { useContext, useEffect, useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DarkModeContext } from './darkModeConte';
import {gsap} from 'gsap'
import { ScrollToPlugin } from 'gsap/all';
import { SectionContext } from './sectConte';
import Image from 'next/image';
import Logo1 from '../assets/img/logo.svg'
import Logo2 from '../assets/img/logodark.svg'
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);
interface Props {
    
}
const NavBar:React.FC = (props:Props) =>{
    
    const [darkModeOn, setDarkModeOn] = useContext(DarkModeContext) 
    const [darkMode, setDarkMode] = useState([<LightModeIcon id='darkIcon' key='light' />, <DarkModeIcon id='darkIcon' key='dark' />])
    const [selectSect, setSelectSect] = useState([<CircleOutlinedIcon key='deselected' fontSize="small" />, <RadioButtonCheckedIcon key='selected' fontSize="small" />])
    const [section, setSection] = useContext(SectionContext)
    
    const selectLogo = [Logo1, Logo2]
    

    useEffect(()=>{
        
        if(section[0]===1 ){
            gsap.fromTo('#homeTitle',{translateX:'-100%', opacity:0},{duration:1 ,translateX:'0%', opacity:1})
            gsap.fromTo('#homeSubt',{translateX:'-100%', opacity:0},{duration:1 ,translateX:'0%', opacity:1, delay:0.2, ease:'expo.out'})
            gsap.fromTo('#sliderImg',{translateX:'15%', opacity:1, filter:'blur(3px)', scale:0.8},{duration:1.5 ,scale:1,translateX:'0%',filter:'blur(0)', opacity:1, ease:'expo.inOut'})
            gsap.fromTo('#servDivDetail',{ translateX:'0', opacity:1},{duration:0 ,translateX:'-2.5rem', opacity:0, ease:'power2.inOut'})
            gsap.fromTo('#servList',{ translateX:'0', opacity:1},{duration:0 ,translateX:'-2.5rem', opacity:0, ease:'power2.inOut'})
            
        }else if(section[1] === 1){
            gsap.fromTo('#servList',{translateY:'5%', translateX:'15%', opacity:0},{duration:0.5 ,translateY:'0%', opacity:1, ease:'power1.out'}).then(
              ()=> {
                gsap.to('#servList',{duration:1 ,translateX:'0%', ease:'power1.out'})
                gsap.fromTo('#servDivDetail',{ translateX:'-5rem', opacity:0},{duration:2 ,translateX:'0', opacity:1, ease:'power2.out'})
            })
            
            gsap.fromTo('#homeTitle',{translateX:'-100%', opacity:1},{duration:1 ,translateX:'0%', opacity:0})
            gsap.fromTo('#homeSubt',{translateX:'-100%', opacity:1},{duration:1 ,translateX:'0%', opacity:0, delay:0.2, ease:'expo.out'})
            gsap.fromTo('#sliderImg',{translateX:'15%', opacity:1, filter:'blur(3px)', scale:0.8},{duration:1.5 ,scale:1,translateX:'0%',filter:'blur(0)', opacity:0, ease:'expo.inOut'})
            gsap.fromTo(['#circle1', '#circle2'],{scale:0, opacity:0.5},{duration:1 ,scale:1, opacity:0})
            
        }else if(section[2] === 1){
            gsap.fromTo(['#textTitle1', '#textTitle2'],{translateX:'-100%', opacity:0},{duration:1 , translateX:'0', opacity:1, ease:'power3.inOut'})

                    gsap.fromTo(['#circle1', '#circle2'],{scale:0, opacity:0},{duration:1 ,scale:1, opacity:0.5, ease:'bounce.out', delay:0.5})
            

        }else if(section[3] === 1){
            gsap.fromTo(['#circle1', '#circle2'],{scale:0, opacity:0.5},{duration:1 ,scale:1, opacity:0})
            
        }

                
                
            
        

    },[section])
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
    const SelectSectToggle =(e:any)=>{
        const currentValue = e.currentTarget.id
        const clientHt:number = document.getElementById('sectionColl')!.clientHeight;
        gsap.fromTo(`#${currentValue}`, {opacity:0, scale:0.3},{opacity:1,scale:1,ease: "expo.inOut",duration:0.2}).then(()=>{
            switch (currentValue){
                case 'sect1':
                            document.getElementById('sectionColl')!.scrollTo(0, 0)
                break;
                case 'sect2':
                    document.getElementById('sectionColl')!.scrollTo(0, clientHt)

                break;
                case 'sect3':
                    document.getElementById('sectionColl')!.scrollTo(0, clientHt*2)

                break;
                case 'sect4':
                    document.getElementById('sectionColl')!.scrollTo(0, clientHt*3)
                break;
            }
        })
    }
    return (
        
        <div className='h-screen fixed right-0 hidden md:flex justify-between flex-col dark:text-white w-12 z-20'>
            <div className='py-10 cursor-pointer'><div className='absolute w-40 right-6'><Link href='/' passHref><Image id='logoT' src={selectLogo[darkModeOn]} alt='logo' /></Link></div></div>
            <div className='list-none flex justify-center items-center flex-col ease-in-out duration-500'>
                <li className='cursor-pointer filter hover:filter transform hover:scale-110 transition-all hover:contrast-50' onClick={DarkModeToggle}>{darkMode[darkModeOn]}</li>
                <li id='sect1' className='cursor-pointer filter hover:filter hover:contrast-50' onClick={SelectSectToggle}>{selectSect[section[0]]}</li>
                <li id='sect2' className='cursor-pointer filter hover:filter hover:contrast-50' onClick={SelectSectToggle}>{selectSect[section[1]]}</li>
                <li id='sect3' className='cursor-pointer filter hover:filter hover:contrast-50' onClick={SelectSectToggle}>{selectSect[section[2]]}</li>
                <li id='sect4' className='cursor-pointer filter hover:filter hover:contrast-50' onClick={SelectSectToggle}>{selectSect[section[3]]}</li>
            </div>

            <div className='list-none h-28 flex justify-around items-center flex-col'>
                <li className='cursor-pointer'><FacebookIcon /></li>
                <li className='cursor-pointer'><YouTubeIcon /></li>
                <li className='cursor-pointer'><TwitterIcon /></li>
            </div>
        </div>
    )
}

export default NavBar;