import React from 'react';
import styles from '../styles/cinzel.module.css';

const ContactWithUs = () => {
  return (
    <div
    className='bg-gray-100 pt-24 pb-12 text-center'
    >
        <h2
        className={`${styles.cinzelFont} font-base tracking-widest text-[62px] text-yellow-500 mb-2`}
        >
            МАЕШ ЗАПИТАННЯ?
        </h2>
        <p
        className='text-[#408692] text-2xl'
        >
            Залиш свої контакні данні та ми дамо фідбек
        </p>
        <div
        className='mx-40'
        >
            <form
            className='flex flex-col gap-5 justify-center mt-12'
            >
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="text"
                required
                placeholder="name"
                />
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="tel" 
                id="phone" 
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                required
                placeholder="+380737777777"
                />
                <input
                className='p-2 text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-2 focus:ring-0'
                type="email" 
                id="email" 
                pattern=".+@globex\.com"
                placeholder="mail@gmail.com"
                />
                <label
                className='text-[#408692] text-lg'
                >
                    Як Вам було бы краще отримати фідбек?
                </label>
                <select
            className='text-lg border-2 border-[#408692] text-[#408692] rounded-xl focus:border-yellow-500 focus:border-1 focus:ring-0'
            value=''
          >
            <option value={0}>По телефону</option>
            <option value={1}>Через месенджер</option>
          </select>
            </form>
        </div>
    </div>
  )
}

export default ContactWithUs