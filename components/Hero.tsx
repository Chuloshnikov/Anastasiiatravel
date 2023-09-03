import React from 'react';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';
import hero from '../assets/images/hero1.webp';
import Link from 'next/link';



const Hero = () => {
  return (
    <div
    className='h-full w-full text-center'
    >
        <div
        className='flex text-center justify-center'
        >
          <h1
          className={`${styles.cinzelFont} tracking-widest absolute z-10 font-base xs:text-[12px] md:text-[44px] xl:text-[68px] xs:top-[11%] md:top-[22%] lg:top-[38%] text-yellow-500`}
          >
              ПОДОРОЖУЙ РАЗОМ З НАМИ
          </h1>
            <Link 
              className='absolute z-10 xs:top-[15%] md:top-[38%] mdl:top-[35%] lg:top-[52%] xs:text-lg mdl:text-4xl tracking-tight font-normal 
              xs:px-4 mdl:px-8 xs:py-2 mdl:py-4 border-2 border-yellow-500 hover:border-white hover:text-yellow-500 duration-300 rounded-2xl'
              href="/travels"
            >
           до подорожей
          </Link>
        </div>
        <Image
        className='h-[100%] brightness-50'
        src={hero}
        alt="heropic"
        priority="true"
        />
    </div>
  )
}

export default Hero