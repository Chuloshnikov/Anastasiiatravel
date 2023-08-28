import React from 'react';
import Link from 'next/link';
import styles from '../styles/cinzel.module.css';

const SocialPages = () => {
  return (
    <div
    className='text-center xs:pt-12 mdl:pt-24 pb-12'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-500 mb-8`}
        >
          Зв'яжись з нами
        </h2>
        <div>
          <div
          className='flex xs:gap-2 mdl:gap-5 justify-center xs:text-sm mdl:text-lg'
          >
            <Link 
              className='p-4 border-2 border-yellow-500 rounded-2xl hover:text-yellow-500 hover:border-white duration-300'
              href="/"
              >
              INSTAGRAM
            </Link>
            <Link 
            className='p-4 border-2 border-yellow-500 rounded-2xl hover:text-yellow-500 hover:border-white duration-300'
              href="/"
              >
              TELEGRAM
            </Link>
          </div>
        </div>
    </div>
  )
}

export default SocialPages;