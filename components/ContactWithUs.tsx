import React, { useRef, FormEvent } from 'react';
import styles from '../styles/cinzel.module.css';

import emailjs from '@emailjs/browser';

const ContactWithUs = () => {

  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_nsgwksa', 'template_ne8ic1j', form.current, '5slQGibGo721XLdVU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <div
    className='bg-gray-100 xs:pt-12 mdl:pt-24 xs:pb-6 mdl:pb-12 text-center'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest xs:text-[22px] md:text-[44px] xl:text-[68px] text-yellow-500 mb-2`}
        >
            МАЕШ ЗАПИТАННЯ?
        </h2>
        <p
        className='text-[#408692] xs:text-lg mdl:text-2xl xs:mx-2 mdl:mx-0'
        >
            Залиш свої контакні данні та ми дамо фідбек
        </p>
        <div
        className='xs:mx-4 mdl:mx-40'
        >
            <form
            ref={form} 
            onSubmit={sendEmail}
            className='flex flex-col gap-5 justify-center mt-12'
            >
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="text"
                name="name"
                required
                placeholder="введіть ваше і&#39;мя..."
                />
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="number" 
                name="phone" 
                required
                placeholder="380737777777..."
                />
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="email" 
                name="email"
                required
                placeholder="вашемайл@gmail.com..."
                />
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="text" 
                name="message"
                required
                placeholder="Напишить який тур Вас цікавить, або ваше питання..."
                />
                <label
                className='text-[#408692] text-lg'
                >
                    Як Вам було бы краще отримати фідбек?
                </label>
                <select
            className='text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-1 focus:ring-0'
            name="communication"
          >
            <option value={0}>По телефону</option>
            <option value={1}>Через месенджер</option>
          </select>
          <div
          id='contactform'
          >
            <button
            className='p-4 border-2 border-yellow-500 text-[#408692] rounded-2xl hover:text-yellow-500 hover:border-[#408692] duration-300'
            type='submit'
            >
              Відправити
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default ContactWithUs