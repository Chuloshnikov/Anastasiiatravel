import React from 'react';
import Link from 'next/link';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';

const Trip = ({travel}) => {
  return (
    <div
        className='max-h-[500px] max-w-[800px] hover:opacity-90 duration-300 rounded-2xl mx-2 border-4 border-[#408692]'
        >
                <div
                >
                    <Image
                    className='xs:h-[350px] xs:w-[300px] md:h-[492px] md:w-[792px] overflow-hidden rounded-2xl'
                    src={travel?.img} alt="tour"
                    width={1200}
                    height={800}
                    alt="travelpic"
                    />
                    <div
                    className='bg-black backdrop-blur-xl z-10 xs:-mt-[72%] md:-mt-[35%] mdl:-mt-[24%] rounded-b-2xl relative bottom-0 opacity-70 max-h-[500px] max-w-[800px]'
                    >
                        <div
                        className='z-20'
                        >
                            <h3
                                className={`${styles.cinzelFont} font-semibold text-[32px] text-yellow-500 mb-2`}
                                >
                                    {travel?.title}
                            </h3>
                            <p
                            className='font-semibold text-xl'
                            >
                                {travel?.subTitle}
                            </p>
                            <div
                            className='mt-2 flex flex-col justify-center text-sm'
                            >
                                <div
                                className='xs:flex-col mdl:flex-row xs:gap-2 flex md:gap-5 justify-center text-base'
                                >
                                    <div
                                    className='flex justify-center gap-1'
                                    >
                                        <p
                                        className='line-through'
                                        >
                                            {travel?.oldPrice > 0 ? `${travel.oldPrice}EUR` : ""}
                                        </p>
                                        <div
                                        className='flex gap-1 text-yellow-500 font-bold'
                                        >
                                            <p>{travel?.price + " EUR"}</p>
                                            <p>{travel?.priceNote && `${travel.priceNote}`}</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        {travel?.eventDate}
                                    </div>
                                </div>
                                <div
                                className='my-6'
                                >
                                    <Link 
                                        className=' px-4 py-2 border-2 hover:text-yellow-500 hover:border-yellow-500 duration-300 text-base rounded-lg'
                                        href={`/travelinfo/${travel?._id}`}
                                        >
                                        Деталі
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
  )
}

export default Trip;