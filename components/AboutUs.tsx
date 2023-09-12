import React from 'react';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';
import one from '../assets/images/one.webp';
import bigone from '../assets/images/oneBig.webp';
import withWine from '../assets/images/withWine.webp';
import two from '../assets/images/two.webp';
import bigtwo from '../assets/images/twoBig.webp';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div 
    className='z-20 bg-gray-100 text-center md:pt-22 md:pb-22 xs:pt-6 xs:pb-12'
    id='about'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-900 xs:mb-12 mb-24`}
        >
            ПРО НАС
        </h2>
        <div>
            <div
            className='border-2 border-yellow-500 rounded-2xl xs:flex-col xl:flex-row flex gap-2 xs:mx-5 mdl:mx-20 xl:mx-10 xl:mx-[400px]'
            >
                <div
                className=' flex xs:w-full xl:w-[50%] xs:p-4 lg:p-8 xs:text-center xs:justify-center'
                >
                    <p
                    className={`${styles.cinzelFont} font-normal tracking-widest xs:text-sm md:text-2xl text-yellow-900`}
                    >
                        Ми організовуємо незабутні тури для невеликих груп. Відвідай обов'язкові місця та відкрий для себе наші унікальні локації.
                        "tak prosto Travel" - це авторські, групові та комфортні тури. Наша команда ретельно планує кожну подорож, пропонуючи нашим клієнтам найкращі краєвиди та пейзажі,
                        досліджуємо топові локації на авто, куштуємо національну кухню та дегустуємо місцеві напої.
                        Допомагаємо зручно та цікаво відкрити нові країни та змінити своє бачення світу.
                        У наших поїздках ти знайдеш собі однодумців і можливо навідь друзів, з якими будеш подорожувати у майбутньому.
                    </p>
                </div>
                <div
                className='flex xs:w-full xs:justify-center xl:w-[50%] gap-2 xs:mb-4 mdl:mb-0 xs:p-4 mdl:p-8'
                >
                    <div
                    className='flex flex-col xs:gap-2 mdl:gap-14'
                    >
                        <Image
                                className='w-[300px] rounded-2xl'
                                src={two}
                                alt='imageTwo'
                                />
                        <div
                        className=''
                        >
                            <Link 
                            className='text-yellow-500 p-4 xs:text-xs mdl:text-lg border-2 border-yellow-500 rounded-2xl hover:border-[#408692] hover:text-[#408692] duration-300'
                            href="/moreaboutus"
                            >
                                БІЛЬШЕ ПРО НАС
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;