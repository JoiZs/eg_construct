import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import Hls from 'hls.js'
import ReactHlsPlayer from 'react-hls-player';

interface Props {
    
}

export const MainHome = (props: Props) => {
  
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const playerRef = React.useRef<any>();
    const onLoadedData = () => {
        setIsVideoLoaded(true);
      };
    const images = [
        {url: 'homeImg/elephant.jpg'},
        {url: 'homeImg/giraffe.jpg'},
        
    ]
    return (
        
        <section id='sectHome' className='h-screen relative w-full sectscroll py-8 flex justify-center items-center dark:text-white'>
            
            <div className='absolute z-20  mx-10 transform md:-translate-x-28 lg:-translate-x-60 border-l-2 border-black dark:border-white overflow-hidden' >
                <h1 id='homeTitle' className='text-7xl italic md:text-9xl font-extrabold text-left tracking-wider opacity-0' >TRAVEL</h1>
                <p id='homeSubt' className=' text-right text-red-700 dark:text-red-600 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* <div id='sliderImg' className='px-10 absolute opacity-75 flex justify-center items-start flex-col z-10'>
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
            </div> */}
                <video id='bgVdo' preload="auto" playsInline={true} onLoadedData={onLoadedData} className='fixed filter brightness-75 z-0 h-screen w-screen object-cover' autoPlay loop muted >
                    <source src='homebg/main.webm' type='video/webm' />
                </video>
                {/* <ReactHlsPlayer
                    playerRef={playerRef}
                    src="http://kyiemaltv.epizy.com/videos/kyarchayar/hp.m3u8"
                    onLoadedData={()=>console.log('loaded')}
                    autoPlay ={true}
                    loop = {true}
                    playsInline ={true}
                    controls={false}
                    muted={true}
                    className='absolute object-cover h-screen w-screen'
                /> */}

        </section>
    )
}
