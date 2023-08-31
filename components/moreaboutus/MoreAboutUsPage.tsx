import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import alina from '../../assets/images/alina.webp';
import anastasiia from '../../assets/images/anastasiia.webp';
import styles from '../../styles/cinzel.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';


const MoreAboutUsPage = () => {
  return (
    <div>
        <div
        className='flex flex-col gap-10 pt-[12%] pb-[10%]'
        >
          <div
          className='max-w-[1200px] mx-auto text-yellow-900 bg-gray-100 
          hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
          flex xs:flex-col xl:flex-row'
          >
            <div>
              <Image 
              className='max-w-[300px] overflow-hidden xs:rounded-t-lg xl:rounded-l-lg'
              src={alina}
              />
            </div>
            <div
            className='p-4 flex flex-col gap-2'
            >
                <h3
                className={`${styles.cinzelFont} font-semibold text-[22px] text-yellow-500`}
                >
                  Аліна
                </h3>
                <p
                className='text-base font-semibold'
                >
                  Кожна з нас відчуває неабияке захоплення від подорожей
                  Нашою ціллю є ділитися емоціями та враженнями 
                  Саме на Мадейрі ми познайомилась з Ліною, а після поїхали разом ще в одну подорож до Норвегії, Лофотенські острови 
                  Після цієї подорожі прийшла Ідея подорожувати та ділитися цим досвідом з іншими людьми 
                  ми зрозуміли  що хочемо  обʼєднувати людей  
                  Частим явищем у  відкладання подорожі,є відсутність компаніі
                  У наших поіздках ,ти знайдеш собі однодумців і можливо навіть друзів з якими будеш подорожувати у Майбутньому
                </p>
                <div
                className='flex flex-col gap-2'
                >
                    <Link
                    className='flex gap-1 items-center font-semibold text-rose-500 hover:text-rose-600 duration-300'
                    href="/"
                    >
                      <span>Instagram</span> 
                      <AiOutlineInstagram/>
                    </Link>
                    <Link
                    className='flex gap-1 items-center font-semibold text-blue-500 hover:text-blue-600 duration-300'
                    href="/"
                    >
                      <span>Telegram</span>
                      <FaTelegram/>
                    </Link>
                </div>
            </div>
          </div>
          <div
          className='max-w-[1200px] mx-auto text-yellow-900 bg-gray-100 
          hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
          flex xs:flex-col xl:flex-row gap-5'
          >
            <div>
              <Image 
              className='max-w-[300px] overflow-hidden xs:rounded-t-lg xl:rounded-l-lg'
              src={anastasiia}
              />
            </div>
            <div
            className='p-4 flex flex-col gap-2'
            >
                <h3
                className={`${styles.cinzelFont} font-semibold text-[22px] text-yellow-500`}
                >
                  Анастасія
                </h3>
                <p
                className='text-base font-semibold'
                >
                  Кожна з нас відчуває неабияке захоплення від подорожей
                  Нашою ціллю є ділитися емоціями та враженнями 
                  Саме на Мадейрі ми познайомилась з Ліною, а після поїхали разом ще в одну подорож до Норвегії, Лофотенські острови 
                  Після цієї подорожі прийшла Ідея подорожувати та ділитися цим досвідом з іншими людьми 
                  ми зрозуміли  що хочемо  обʼєднувати людей  
                  Частим явищем у  відкладання подорожі,є відсутність компаніі
                  У наших поіздках ,ти знайдеш собі однодумців і можливо навіть друзів з якими будеш подорожувати у Майбутньому
                </p>
                <div
                className='flex flex-col gap-2'
                >
                    <Link
                    className='flex gap-1 items-center font-semibold text-rose-500 hover:text-rose-600 duration-300'
                    href="/"
                    >
                      <span>Instagram</span> 
                      <AiOutlineInstagram/>
                    </Link>
                    <Link
                    className='flex gap-1 items-center font-semibold text-blue-500 hover:text-blue-600 duration-300'
                    href="/"
                    >
                      <span>Telegram</span>
                      <FaTelegram/>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MoreAboutUsPage;