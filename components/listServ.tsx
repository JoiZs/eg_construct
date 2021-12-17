import React from 'react'
import Link from 'next/link';
import SimpleImageSlider from 'react-simple-image-slider'


interface Props {
    title:string;
    photo?:string;
}

export const ListServ = (props: Props) => {
    const images = [
        {url: 'homeImg/site.jpg'},
        {url: 'homeImg/design.jpg'},
        
    ]
    return (
        <div className='h-full whitespace-normal flex justify-center items-center text-justify flex-col'>
                <div className='h-full md:w-3/4 relative bg-opacity-0 dark:bg-opacity-10 bg-gray-200 dark:bg-gray-900 overflow-hidden px-5 flex flex-col justify-center items-center'>
                    <h1 className='text-center z-20 w-full text-3xl md:text-5xl pb-5 tracking-widest uppercase'>{props.title}</h1>
                    <Link href='/' passHref><button className='z-20 border-2 text-sm md:text-lg  border-black dark:border-white uppercase p-2 hover:opacity-50'>Explore Project</button></Link>
                    <div id='sliderImg' className='absolute w-full h-full flex justify-center items-center flex-col z-10'>
                    {document.documentElement.clientHeight>document.documentElement.clientWidth?
                        <SimpleImageSlider
                        width={document.documentElement.clientWidth/1.5}
                        height={document.documentElement.clientHeight/2}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        loop={true}
                        autoPlay={true}
                        autoPlayDelay={3}
                        
                    />: <SimpleImageSlider
                    width={document.documentElement.clientWidth/2}
                    height={document.documentElement.clientHeight/1.8}
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
                    
            </div>
    )
}
