import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider' 


interface Props {
    
}

export const MainHome = (props: Props) => {
  
    
    const images = [
        {url: 'https://wallpaperaccess.com/full/1295663.jpg'},
        {url: 'https://www.itl.cat/pngfile/big/293-2933839_pastel-minimalist-wallpaper-hd-top-wallpaper-hd-images.png'},
        {url: 'https://c4.wallpaperflare.com/wallpaper/255/901/198/minimalism-blue-background-simple-simple-background-wallpaper-preview.jpg'},
        {url: 'https://wallpaperaccess.com/full/1295663.jpg'},
        {url: 'https://wallpaperaccess.com/full/1295663.jpg'},
    ]
    return (
        <section id='sectHome' className='h-screen relative w-full sectscroll px-12 py-8 flex justify-center items-center dark:text-white'>
            <div className='absolute z-10  mx-10 transform md:-translate-x-28 lg:-translate-x-60 border-l-2 border-black dark:border-white overflow-hidden' >
                <h1 id='homeTitle' className='text-7xl italic md:text-9xl font-extrabold text-left tracking-wider opacity-0' >TRAVEL</h1>
                <p id='homeSubt' className=' text-right text-red-700 dark:text-red-600 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id='sliderImg' className='px-10 sticky opacity-75 flex justify-center items-start flex-col'>
                    <SimpleImageSlider
                        width={document.documentElement.clientWidth/2}
                        height={document.documentElement.clientHeight/2}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        loop={true}
                        autoPlay={true}
                        autoPlayDelay={3}
                    />
                <span className='transform text-xs italic opacity-75'>@Finest_Travel</span>
            </div>
        </section>
    )
}
