import React, { useContext } from 'react'
import { About } from './about'
import { ContactUs } from './contact'
import { MainHome } from './mainDetails'
import { SectionContext } from './sectConte'
import { Services } from './services'


interface Props {
    
}
export const SectColl = (props: Props) => {
    const [section, setSection] = useContext(SectionContext)
 
    const selectTitle = ()=>{
        
            const sections = ['sectHome', 'sectServ', 'sectAbout', 'sectCont']
            const perctSect = (sec:string)=> document.getElementById(sec)?.getBoundingClientRect().top;
  
          if(perctSect(sections[0]) === 0){
              setSection([1,0,0,0])
          }else if(perctSect(sections[1]) === 0){
              setSection([0,1,0,0])
          }else if(perctSect(sections[2]) === 0){
              setSection([0,0,1,0])
          }else if(perctSect(sections[3]) === 0){
              setSection([0,0,0,1])
          }
    }

    return (
        <div onScroll={selectTitle}  id='sectionColl' className='scrollmand'>
            <MainHome />
            <Services />
            <About />
            <ContactUs />
        </div>
    )
}
