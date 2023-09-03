import React, { useState, useEffect } from 'react';
import styles from '../styles/cinzel.module.css';
import Trip from './Trip';
import axios from 'axios';


const UpcomingTrips = () => {
  const [closestTravel, setClosestTravel] = useState<any>([]);
  console.log(closestTravel);
  useEffect(() => {
    // Отправляем запрос к API
    axios.get('/api/travelsdata')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        const lastItem = sortedData[0];

        setClosestTravel(lastItem);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

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
              <Trip travel={closestTravel}/>
        </div>
    </div>
  )
}

export default UpcomingTrips;