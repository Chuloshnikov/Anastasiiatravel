import React from 'react';
import styles from '../styles/cinzel.module.css';
import Trip from './Trip';


const UpcomingTrips = () => {
  return (
    <div
    className='bg-[#749CBA] text-center md:pt-22 md:pb-22 xs:pt-6 xs:pb-12'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-500 xs:mb-6 mdl:mb-12`}
        >
            НАЙБЛИЖЧИЙ ТУР
        </h2>
        <div 
          className='flex gap-5 justify-center'
          >
            <Trip/>
        </div>
    </div>
  )
}

export default UpcomingTrips;