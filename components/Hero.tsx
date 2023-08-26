import React from 'react';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';
import hero from '../assets/images/hero1.webp';
import Link from 'next/link';



const Hero = () => {
  return (
    <div
    className='h-[1000px] w-full'
    >
        <div 
        className='absolute bg-black h-[1000px] w-full opacity-30'
        >
        </div>
        <h1
        className={`${styles.cinzelFont} tracking-widest absolute z-10 font-base text-[68px] top-[38%] left-[20%] text-yellow-500`}
        >
            ПОДОРОЖУЙ РАЗОМ З НАМИ
        </h1>
        <Link 
        className='absolute z-10 top-[52%] left-[45%] text-4xl tracking-tight font-normal 
        px-8 py-4 border-2 border-yellow-500 hover:border-white hover:text-yellow-500 duration-300 rounded-2xl'
        href="/"
        >
           календар турів
        </Link>
        <Image
        src={hero}/>
    </div>
  )
}

export default Hero