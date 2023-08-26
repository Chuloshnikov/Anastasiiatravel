import React from 'react';
import styles from '../styles/cinzel.module.css';
import Trip from './Trip';


const UpcomingTrips = () => {
  return (
    <div
    className='bg-[#749CBA] text-center pt-24 pb-12'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest text-[62px] text-yellow-500 mb-24`}
        >
            НАЙБЛИЖЧІ ТУРИ
        </h2>
        <div 
        className='mb-12 flex gap-5 justify-center'
        >
            <Trip/>
        </div>
    </div>
  )
}

export default UpcomingTrips;