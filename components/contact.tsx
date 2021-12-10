import React from 'react'

interface Props {
    
}

export const ContactUs = (props: Props) => {
    return (
        <section id='sectCont' className='h-screen w-full sectscroll pt-8 flex flex-col justify-between items-center dark:text-white'>
            <div className=' w-screen h-full relative overflow-hidden z-10'>
                <div id='contUsDiv' className='z-10 rounded-sm backdrop-filter backdrop-blur-md absolute h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/3 '>
                    <div className='w-full h-full rounded-md flex justify-between flex-col'>
                        <input className='bg-transparent outline-none' type="text" placeholder='Name' />
                        <input className='bg-transparent outline-none' type="text" placeholder='Email' />
                        <textarea className='bg-transparent outline-none' placeholder='Message' id="w3review" name="w3review" rows={4} cols={50} />
                        <button className='bg-red-600 text-white dark:text-black  p-2 hover:opacity-50'>Send</button>
                    </div>
                </div>
                    <div className='absolute z-0 top-1/2 left-0 text-7xl uppercase opacity-30'><span>Get in touch</span></div>
                    <div className='bg-red-600 opacity-10 z-0 w-500cir h-500cir absolute rounded-full  left-1/2 top-0 transform rotate-45'></div>
                    <div className='bg-red-300 opacity-10 z-0 w-500cir h-500cir absolute rounded-full  left-1/2 translate-x-10 translate-y-10 top-0 transform rotate-45'></div>
            </div>
            <div className=' w-full h-1/2 flex flex-row  items-end bg-red-700 uppercase relative z-10'>
                <div className='flex-1 h-1/2 px-6 '>
                    <h1 className='text-sm md:text-xl'>pierre pienaar</h1>
                    <span className='text-tiny md:text-sm opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta in perferendis qui.</span>
                </div>
                <div className='flex-1 h-1/2 px-2 list-none text-center pr-12'>
                    <h1>Address</h1>
                    <span className='opacity-70 text-tiny md:text-sm'>
                        <li>address</li>
                        <li>address</li>
                        <li>address</li>
                    </span>
                </div>
            </div>
        </section>
    )
}
