import React from 'react'
import { DarkCont } from './darkModeConte';
import { MenuB } from './menu';
import NavBar from './navbar';
import { SectColl } from './sectColl';
import { SectCont } from './sectConte';
import { Subtitle } from './subtitle';

interface Props {
    
}
const HomeSec:React.FC = (props:Props) =>{


    return (
        
        <DarkCont>
                <div className='container h-screen dark:bg-gray-900 bg-gray-200'>
                    <SectCont>
                        <Subtitle />
                        <MenuB />
                        <NavBar />
                        <SectColl />
                    </SectCont>
                </div>
        </DarkCont>
    )
}

export default HomeSec;