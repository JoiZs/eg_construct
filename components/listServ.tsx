import React from 'react'
import Link from 'next/link';
import SimpleImageSlider from 'react-simple-image-slider'


interface Props {
    title:string;
    photo?:string;
    detail:string;
}

export const ListServ = (props: Props) => {
    const images = [
        {url: 'homeImg/elephant.jpg'},
        {url: 'homeImg/giraffe.jpg'},
        
    ]
    return (
        <div className='h-full whitespace-normal  flex md:justify-center items-center text-justify flex-col'>
                <div className='w-full md:w-3/4 relative flex justify-center items-center'>
                    {/* <img src={`homeImg/elephant.jpg` || props.photo } alt="Strawberry" className='w-full md:w-1/2' /> */}
                    <div id='sliderImg' className='px-10  top-0 opacity-75 flex justify-center items-start flex-col z-10'>
                    {document.documentElement.clientHeight>document.documentElement.clientWidth?
                        <SimpleImageSlider
                        width={document.documentElement.clientWidth/1.5}
                        height={document.documentElement.clientHeight/3.5}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        loop={true}
                        autoPlay={true}
                        autoPlayDelay={3}
                    />: <SimpleImageSlider
                    width={document.documentElement.clientWidth/3}
                    height={document.documentElement.clientHeight/2.5}
                    images={images}
                    showBullets={false}
                    showNavs={false}
                    loop={true}
                    autoPlay={true}
                    autoPlayDelay={3}
                />
                    }
            </div>
                </div>
                <div className='flex h-3/4 md:h-1/4 justify-around flex-col items-center'>
                    <h1 className='text-center  w-full md:w-1/2 text-5xl uppercase'>{props.title}</h1>
                    <span className='text-xs  md:w-1/2'>{props.detail}</span>
                    <Link href='/' passHref><button className='bg-red-600 text-white dark:text-black p-2 hover:opacity-50'>Explore More</button></Link>
                </div>
            </div>
    )
}
