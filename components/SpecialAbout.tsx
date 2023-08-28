import React from 'react';
import styles from '../styles/cinzel.module.css';

const SpecialAbout = () => {
  return (
    <div
    className='text-center bg-[#749CBA] xs:pt-12 mdl:pt-24 pb-12'
    >
      <h2
      className={`${styles.cinzelFont} font-base tracking-widest xs:mx-6 xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-500 xs:mb-12 mdl:mb-24`}
      >
        ЧОМУ САМЕ МИ?
      </h2>
      <div
      className='xs:mx-6 mdl:mx-40 xs:flex-col lg:flex-row flex gap-5 text-xl xs:text-sm'
      >
        <div
        className='xs:p-2 mdl:p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <p>
          Ми любимо отримувати задоволення від кожної хвилини і сантиметру подорожі. 
          Якщо житло — то автентичний скандинавський дім. Якщо ресторан — то на березі 
          океану з видом на захід сонця.
          </p>
        </div>
        <div
        className='xs:p-2 mdl:p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <p>
          Ми любимо отримувати задоволення від кожної хвилини і сантиметру подорожі. 
          Якщо житло — то автентичний скандинавський дім. Якщо ресторан — то на березі 
          океану з видом на захід сонця.
          </p>
        </div>
        <div
        className='xs:p-2 mdl:p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <p>
          Ми любимо отримувати задоволення від кожної хвилини і сантиметру подорожі. 
          Якщо житло — то автентичний скандинавський дім. Якщо ресторан — то на березі 
          океану з видом на захід сонця.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecialAbout;