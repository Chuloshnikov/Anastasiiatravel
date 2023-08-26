import React from 'react';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';
import tour from '../assets/images/tour1.webp';
import Link from 'next/link';

const UpcomingTrips = () => {
  return (
    <div
    className='bg-[#749CBA] text-center pt-24'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest text-[62px] text-yellow-500 mb-24`}
        >
            НАЙБЛИЖЧІ ТУРИ
        </h2>
        <div 
        className='mb-12 flex gap-5 justify-center'
        >
            <div
            className='h-[500px] w-[800px] hover:opacity-90 duration-300'
            >
                <Image
                className='h-[500px] w-[800px]'
                src={tour} alt="tour"/>
                <div
                className='bg-black backdrop-blur-xl z-10 -mt-[22%] relative bottom-0 opacity-70'
                >
                    <div
                    className='z-20'
                    >
                        <h3
                            className={`${styles.cinzelFont} font-semibold text-[32px] text-yellow-500 mb-2`}
                            >
                                Мoдейра
                        </h3>
                        <p
                        className='font-semibold text-xl'
                        >
                            Магія Партугалії
                        </p>
                        <div
                        className='mt-2 flex flex-col justify-center text-sm'
                        >
                            <div
                            className='flex gap-5 justify-center text-base'
                            >
                                <div
                                className='flex justify-center gap-1'
                                >
                                    <p
                                    className='line-through'
                                    >
                                        1500$
                                    </p>
                                    <div
                                    className='flex gap-1 text-yellow-500 font-bold'
                                    >
                                        <p>1299$</p>
                                        <p>останнє місце</p>
                                    </div>
                                </div>
                                
                                <div>
                                    з 15 серпня до 31 серпня
                                </div>
                            </div>
                            <div
                            className='my-6'
                            >
                                <Link 
                                    className=' px-4 py-2 border-2 hover:text-yellow-500 hover:border-yellow-500 duration-300'
                                    href="/"
                                    >
                                    Деталі
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                    
        </div>
    </div>
  )
}

export default UpcomingTrips;