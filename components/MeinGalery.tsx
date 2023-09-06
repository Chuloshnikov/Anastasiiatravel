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
    className='bg-gray-100  xs:pt-12 md:pt-24 pb-12'
    >
        <div
        className='border-2 border-yellow-500 rounded-2xl flex xs:mx-6 md:mx-20 lg:mx-40'
        >
            <div
            className='flex mx-auto w-full xs:hidden mdl:flex'
            >
                <div
                className='flex gap-2 xs:p-2 mdl:p-6 rounded-2xl'
                >
                    <div
                    className='flex flex-col gap-2 mt-12'
                    >
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={one}
                        alt='tourimg'
                        priority={true}
                        />
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={two}
                        alt='tourimg'
                        />
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={three}
                        alt='tourimg'
                        />
                        
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-12'
                    >
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={four}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl mt-2 w-[250px] hover:scale-150 duration-500'
                            src={five}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl mt-8 w-[300px] hover:scale-150 duration-500'
                            src={eighteen}
                            alt='tourimg'
                            />
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-6'
                    >
                        <Image 
                            className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                            src={six}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={seven}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl my-10 w-[400px] hover:scale-150 duration-500'
                            src={eight}
                            alt='tourimg'
                            />
                    </div>
                    <div
                    className='flex flex-col gap-2'
                    >
                        <Image 
                            className='rounded-2xl w-[400px] hover:scale-150 duration-500'
                            src={nine}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                            src={ten}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                            src={seventeen}
                            alt='tourimg'
                            />
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-24'
                    >
                        <Image 
                        className='rounded-2xl ml-8 w-[200px] hover:scale-150 duration-500'
                        src={eleven}
                        alt='tourimg'
                        />
                        <Image 
                        className='rounded-2xl w-[400px] hover:scale-150 duration-500'
                        src={twelve}
                        alt='tourimg'
                        />
                        <Image 
                        className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                        src={thirteen}
                        alt='tourimg'
                        />
                        
                    </div>
                    <div
                    className='flex flex-col gap-2 mt-16'
                    >
                        <Image 
                            className='rounded-2xl w-[300px] hover:scale-150 duration-500'
                            src={fourteen}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl mt-6 w-[300px] hover:scale-150 duration-500'
                            src={fifteen}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl mt-4 w-[300px] hover:scale-150 duration-500'
                            src={sixteen}
                            alt='tourimg'
                            />
                    </div>
                </div>
            </div>
            <div
            className='mdl:hidden xs:flex flex-col gap-2 p-2'
            >
                        <Image 
                            className='rounded-2xl w-full'
                            src={fifteen}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                            src={sixteen}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                        src={eleven}
                        alt='tourimg'
                        />
                        <Image 
                            className='rounded-2xl w-full'
                        src={thirteen}
                        alt='tourimg'
                        />
                         <Image 
                            className='rounded-2xl w-full'
                            src={nine}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                            src={ten}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                            src={eight}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                            src={eighteen}
                            alt='tourimg'
                            />
                        <Image 
                            className='rounded-2xl w-full'
                        src={one}
                        alt='tourimg'
                        />
                        <Image 
                            className='rounded-2xl w-full'
                        src={three}
                        alt='tourimg'
                        />
            </div>
        </div>
    </div>
  )
}

export default MeinGalery;