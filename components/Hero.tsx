import React from 'react';
import styles from '../styles/hero.module.css';
import Image from 'next/image';
import hero from '../assets/images/hero1.webp';



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
        className={`${styles.exoFont} absolute w-[500px] h-12 z-10 font-semibold text-6xl top-[38%] left-[20%] text-yellow-500`}
        >
            ПОДОРОЖУЙ РАЗОМ З НАМИ
        </h1>
        <Image
        
        src={hero}/>
    </div>
  )
}

export default Hero