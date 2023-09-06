import React from 'react';
import Image from 'next/image';
import tour from '../../assets/images/tour1.webp';
import styles from '../../styles/cinzel.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Travel = ({ travel }) => {

    const router = useRouter();

  return (
    <div
    className='max-w-[1200px] text-yellow-900 bg-gray-100 
    hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
    flex xs:flex-col xl:flex-row gap-5'
    >
        <div
        className='xs:w-full xl:w-[70%]'
        >
            <img 
                src={travel?.img && travel.img} 
                alt="tourpic" 
                className='overflow-hidden xs:rounded-t-lg xl:rounded-l-lg w-full h-full'
                />
              {router.pathname !== '/'  ? (
            <Link
                className='absolute -mt-20 ml-[19%] z-10 tracking-tight font-normal text-white
                border-2 p-2 border-yellow-500 hover:border-white hover:text-yellow-500 duration-300 rounded-2xl'
                  href='/#contactform'
            rel="noopener noreferrer"
            
            >
              Забронювати
            </Link>
            ) : (
              <Link 
                className='absolute -mt-20 ml-[19%] z-10 tracking-tight font-normal text-white
                 border-2 p-2 border-yellow-500 hover:border-white hover:text-yellow-500 duration-300 rounded-2xl'
                  href='#contactform'
                  rel="noopener noreferrer"
            >
              Забронювати
            </Link>
            )
          }
        </div>
        <div
            className='xs:w-full xl:w-[30%] p-2 flex flex-col gap-2'
            >
            <h3
                className={`${styles.cinzelFont} font-semibold text-[22px] text-yellow-500`}
                >
                {travel?.title}
            </h3>
            <p
                className='font-semibold text-xl'
                >
                {travel?.subTitle}
            </p>
            <p
                className='text-sm font-semibold'
                >
                {travel?.description}
            </p>
            <div
                className='flex flex-col gap-5 text-base mt-4'
                >
                <div
                    className='flex justify-around gap-1'
                    >
                    <p
                        className='line-through font-semibold'
                        >
                        {travel?.oldPrice && travel.oldPrice}$
                    </p>
                    <div
                        className='flex gap-1 text-yellow-500 font-bold'
                        >
                        <p>{travel?.price}$</p>
                        <p>{travel?.priceNote && travel.priceNote}</p>
                    </div>
                </div>
                <div
                    className='font-normal text-center'
                    >
                    <p>
                        {travel?.eventDate}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Travel;