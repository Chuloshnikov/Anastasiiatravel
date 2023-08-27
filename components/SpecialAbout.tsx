import React from 'react';
import styles from '../styles/cinzel.module.css';

const SpecialAbout = () => {
  return (
    <div
    className='text-center bg-[#749CBA]  pt-24 pb-12'
    >
      <h2
      className={`${styles.cinzelFont} font-base tracking-widest text-[62px] text-yellow-500 mb-24`}
      >
        ЧОМУ САМЕ МИ?
      </h2>
      <div
      className='mx-40 flex gap-5 text-xl'
      >
        <div
        className='p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <p>
          Ми любимо отримувати задоволення від кожної хвилини і сантиметру подорожі. 
          Якщо житло — то автентичний скандинавський дім. Якщо ресторан — то на березі 
          океану з видом на захід сонця.
          </p>
        </div>
        <div
        className='p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <p>
          Ми любимо отримувати задоволення від кожної хвилини і сантиметру подорожі. 
          Якщо житло — то автентичний скандинавський дім. Якщо ресторан — то на березі 
          океану з видом на захід сонця.
          </p>
        </div>
        <div
        className='p-8 border-2 border-yellow-500 rounded-2xl'
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