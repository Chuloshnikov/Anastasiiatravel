import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen
}  from '../assets/images/galery/index';

const MeinGalery = () => {
  return (
    <div
    className='bg-gray-100 pt-24 pb-12'
    >
        <div
        className='border-2 border-yellow-500 rounded-2xl flex mx-40'
        >
            <div
            className='flex mx-auto w-full'
            >
                <div
                className='flex gap-2 px-6 py-6 bg-[#749CBA] rounded-2xl'
                >
                    <div
                    className='flex flex-col gap-2 mt-12'
                    >
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={one}/>
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={two}/>
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={three}/>
                        
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-12'
                    >
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={four}/>
                        <Image 
                            className='rounded-2xl mt-2 w-[250px] hover:scale-150 duration-500'
                            src={five}/>
                        <Image 
                            className='rounded-2xl mt-8 w-[300px] hover:scale-150 duration-500'
                            src={eighteen}/>
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-6'
                    >
                        <Image 
                            className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                            src={six}/>
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={seven}/>
                        <Image 
                            className='rounded-2xl my-10 w-[400px] hover:scale-150 duration-500'
                            src={eight}/>
                    </div>
                    <div
                    className='flex flex-col gap-2'
                    >
                        <Image 
                            className='rounded-2xl w-[400px] hover:scale-150 duration-500'
                            src={nine}/>
                        <Image 
                            className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                            src={ten}/>
                        <Image 
                            className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                            src={seventeen}/>
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-24'
                    >
                        <Image 
                        className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                        src={eleven}/>
                        <Image 
                        className='rounded-2xl w-[400px] hover:scale-150 duration-500'
                        src={twelve}/>
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={thirteen}/>
                        
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-16'
                    >
                        <Image 
                            className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                            src={fourteen}/>
                        <Image 
                            className='rounded-2xl mt-6 w-[300px] hover:scale-150 duration-500'
                            src={fifteen}/>
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={sixteen}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeinGalery;