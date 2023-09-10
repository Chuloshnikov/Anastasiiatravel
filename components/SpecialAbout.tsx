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
        className='xs:p-2 mdl:p-8 flex flex-col gap-2 border-2 border-yellow-500 rounded-2xl'
        >
          <h4
          className='text-2xl font-bold'
          >
            Бездоганний досвід
          </h4>
          <p>
            Ми спеціалізуємося на створенні незабутніх моментів для вас.
            З нами ви отримуєте тільки найкращі рекомендації та маршрути.
            Наша команда знає, як зробити вашу подорож особливою.
            Авторські подорожі. Дослідження острову на авто. 
          </p>
        </div>
        <div
        className='xs:p-2 mdl:p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <h4
          className='text-2xl font-bold'
          >
            Персоналізований підхід до кожного клієнта
          </h4>
          <p>
            Ми слухаємо ваші бажання та потреби.
            Разом плануємо подорож вашої мрії.
            Наша мета – не просто продати тур, а зробити ваш відпочинок незабутнім.
            Супровід на всіх етапах мандрівки з України до місця призначення.
          </p>
        </div>
        <div
        className='xs:p-2 mdl:p-8 border-2 border-yellow-500 rounded-2xl'
        >
          <h4
          className='text-2xl font-bold'
          >
            Безпека та надійність на кожному кроці
          </h4>
          <p>
            Ваш комфорт та безпека – наш головний пріоритет.
            З нами ви завжди впевнені в своїй подорожі.
            Нам важливо створити гарний досвід для вас.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecialAbout;