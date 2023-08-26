import React from 'react';
import Image from 'next/image';
import tour from '../assets/images/tour1.webp';
import Link from 'next/link';
import styles from '../styles/cinzel.module.css';

const Trip = () => {
  return (
    <div
            className='h-[500px] w-[800px] hover:opacity-90 duration-300 rounded-2xl border-4 border-[#408692]'
            >
                <Image
                className='h-[500px] w-[800px] overflow-hidden rounded-2xl'
                src={tour} alt="tour"/>
                <div
                className='bg-black backdrop-blur-xl z-10 -mt-[24%] rounded-b-2xl relative bottom-0 opacity-70'
                >
                    <div
                    className='z-20'
                    >
                        <h3
                            className={`${styles.cinzelFont} font-semibold text-[32px] text-yellow-500 mb-2`}
                            >
                                Мaдейра
                        </h3>
                        <p
                        className='font-semibold text-xl'
                        >
                            Магія Португалії
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
                                    className=' px-4 py-2 border-2 hover:text-yellow-500 hover:border-yellow-500 duration-300 text-base'
                                    href="/"
                                    >
                                    Деталі
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}

export default Trip;