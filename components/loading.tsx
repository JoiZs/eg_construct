import Image from 'next/image'
import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import loadingWP from '../assets/img/loadingWp.svg'

interface Props {
    
}

export const Loading = (props: Props) => {
    return (
        <div className='container h-screen '>
            <div className='flex h-full flex-col justify-center items-center' >
                <Loader type='ThreeDots' color='#000'/>
                <h1 className='italic uppercase tracking-widest animate-pulse'>Loading</h1>
                <div className='absolute w-3/4'>
                    <Image src={loadingWP} alt='wp' className='opacity-10'/>
                </div>
            </div>
        </div>
    )
}
