import React from 'react';
import styles from '../styles/cinzel.module.css';
import Trip from './Trip';


const UpcomingTrips = () => {
  return (
    <div
    className='bg-[#749CBA] text-center xs:pt-12 md:pt-24 pb-12'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-500 xs:mb-12 md:mb-24`}
        >
            НАЙБЛИЖЧИй ТУР
        </h2>
        <div 
        className='xs:mb-6 md:mb-12 flex gap-5 justify-center'
        >
            <Trip/>
        </div>
    </div>
  )
}

export default UpcomingTrips;