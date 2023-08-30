import React from 'react';
import Image from 'next/image';
import tour from '../../assets/images/tour1.webp';
import styles from '../../styles/cinzel.module.css';

const Travel = () => {
  return (
    <div
    className='max-w-[1200px] text-yellow-900 bg-gray-100 
    hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
    flex xs:flex-col xl:flex-row gap-5'
    >
        <div
        className='xs:w-full xl:w-[70%]'
        >
            <Image 
                src={tour} 
                alt="tourpic" 
                className='overflow-hidden xs:rounded-t-lg xl:rounded-l-lg'
                />
        </div>
        <div
            className='xs:w-full xl:w-[30%] p-2 flex flex-col gap-2'
            >
            <h3
                className={`${styles.cinzelFont} font-semibold text-[22px] text-yellow-500`}
                >
                Мадейра
            </h3>
            <p
                className='font-semibold text-xl'
                >
                Магія Португалії
            </p>
            <p
                className='text-sm font-semibold'
                >
                Тур до Мадейри – це захоплююча подорож на західний атлантичний острів, 
                відомий своєю природною красою та унікальною атмосферою. 
                Під час цього туру ви зможете насолодитися вражаючими горами, 
                ласкавим кліматом та захоплюючими виглядами на океан. 
                Відвідайте традиційні міста та села, де ви зможете скуштувати місцеву кухню та 
                познайомитися з гостинними місцевими жителями. Екскурсії до винних підприємств 
                дозволять вам насолодитися видатними мадейрськими винами. 
                Чи ви любите активний відпочинок? Тоді ви оціните можливість підкорити трекінгові 
                маршрути і спробувати екстремальні види спорту.
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
                        1500$
                    </p>
                    <div
                        className='flex gap-1 text-yellow-500 font-bold'
                        >
                        <p>1299$</p>
                        <p>останнє місце</p>
                    </div>
                </div>
                <div
                    className='font-normal text-center'
                    >
                    <p>
                        з 15 серпня до 31 серпня
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Travel;