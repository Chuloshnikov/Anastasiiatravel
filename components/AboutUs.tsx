import React from 'react';
import styles from '../styles/cinzel.module.css';
import Image from 'next/image';
import one from '../assets/images/one.webp';
import bigone from '../assets/images/oneBig.webp';
import withWine from '../assets/images/withWine.webp';
import two from '../assets/images/two.webp';
import bigtwo from '../assets/images/twoBig.webp';

const AboutUs = () => {
  return (
    <div 
    className='z-20 bg-gray-100 text-center pt-24 pb-24'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest text-[62px] text-yellow-900 mb-24`}
        >
            ПРО НАС
        </h2>
        <div>
            <div
            className='border-2 border-yellow-500 rounded-2xl flex mx-40'
            >
                <div
                className='w-[40%] p-8'
                >
                    <p
                    className={`${styles.cinzelFont} font-normal tracking-widest text-base text-yellow-900`}
                    >
                        Ми організовуєм незабутні тури для невеликих груп. Відвідай обов'язкові місця та відкрий для себе наші унікальні локації.
                        "Anastasiia Travel" - це авторські, групові та комфортні тури. Ми ретельно плануємо кожну подорож, надаючи зручний графік та професійних гідів.
                        Подорожуй з нами від України до екзотичних місць, таких як Чорногорія, Туреччина, Ісландія. Підбери і замов тур онлайн на нашому сайті.
                        "Anastasiia Travel" об'єднує однодумців, які цінують незабутні враження. Ми допомагаємо зручно та цікаво відкрити нові країни та змінити своє бачення світу.
                        З нами кожна подорож стає пригодою. Знайди свою ідеальну мандрівку з "Anastasiia Travel".
                    </p>
                </div>
                <div
                className='flex justify-end w-[50%] gap-5 py-8'
                >
                    <div
                    className='flex flex-col gap-5'
                    >
                        <div
                        className='pt-4'
                        >
                        <Image
                            className='w-[200px] rounded-2xl'
                            src={one}
                            
                            />
                        </div>
                        <div
                        >
                            <Image
                                className='w-[200px] rounded-2xl'
                                src={two}
                                />
                        </div>
                    </div>
                    <div
                    className=''
                    >
                        <Image 
                        className='w-[400px] rounded-2xl'
                        src={withWine}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;