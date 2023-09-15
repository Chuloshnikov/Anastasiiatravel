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
        className='flex flex-col gap-10 pt-[12%] pb-[10%] mx-4'
        >
          <div
          className='max-w-[1200px] xs:mx-2 mdl:mx-auto bg-gray-100 
          hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
          flex xs:flex-col mdl:flex-row'
          >
            <div
            className='flex xs:items-center xs:justify-center'
            >
              <Image 
              className='max-w-[300px] overflow-hidden xs:rounded-t-lg xl:rounded-l-lg'
              src={alina}
              />
            </div>
            <div
            className='p-4 flex flex-col gap-2 xs:text-center xs:items-center'
            >
                <h3
                className={`${styles.cinzelFont} font-semibold text-[32px] text-yellow-500`}
                >
                  Ліна
                </h3>
                <p
                className='xs:text-base mdl:text-xl italic font-semibold xs:text-center xs:items-center text-[#408692] px-10'
                >
                  Привіт! Я Ліна &#128522;, Як мені прийшла ідея організовувати подорожі? Після останньої мандрівки на Лофотенські острови
                  я зрозуміла що хочу об&apos;'єднувати людей та шукати для них найкращі локації. Тому що подорож, це найкраще що можна купити за гроші. 
                </p>
                <div
                className='flex flex-col gap-2 mt-16'
                >
                    <Link
                    className='flex gap-1 items-center font-semibold text-rose-500 hover:text-rose-600 duration-300'
                    href="https://instagram.com/l.i.n_ok?igshid=MzRlODBiNWFlZA=="
                    >
                      <span>Instagram</span> 
                      <AiOutlineInstagram/>
                    </Link>
                    <Link
                    className='flex gap-1 items-center font-semibold text-blue-500 hover:text-blue-600 duration-300'
                    href="https://t.me/liino_chek"
                    >
                      <span>Telegram</span>
                      <FaTelegram/>
                    </Link>
                </div>
            </div>
          </div>
          <div
          className='max-w-[1200px] xs:mx-2 mdl:mx-auto text-[#408692] bg-white 
          hover:opacity-90 duration-300 rounded-xl mx-2 border-4 border-[#408692]
          flex xs:flex-col mdl:flex-row gap-5'
          >
            <div
            className='flex xs:items-center xs:justify-center mdl:justify-start mdl:items-start'
            >
              <Image 
              className='max-w-[300px] overflow-hidden xs:rounded-t-lg xl:rounded-l-lg'
              src={anastasiia}
              />
            </div>
            <div
            className='p-4 flex flex-col gap-2 xs:text-center xs:items-center'
            >
                <h3
                className={`${styles.cinzelFont} font-semibold text-[32px] text-yellow-500`}
                >
                  Анастасія
                </h3>
                <p
                className='xs:text-base mdl:text-xl italic font-semibold xs:text-center xs:items-center text-[#408692] px-10'
                >
                   Привіт! Я Анастасія &#128522;, Як мені прийшла ідея організовувати подорожі? Останнім часом я багато подорожую, і саме в цих подорожах 
                  я знаходжу нових цікавих знайомих та друзів. Тому, коли Ліна запропонувала мені допомагати з організацією, мені здалась ця ідея класною.
                </p>
                <div
                className='flex flex-col gap-2 mt-16'
                >
                    <Link
                    className='flex gap-1 items-center font-semibold text-rose-500 hover:text-rose-600 duration-300'
                    href="https://instagram.com/anastasia.zahorodnia"
                    >
                      <span>Instagram</span> 
                      <AiOutlineInstagram/>
                    </Link>
                    <Link
                    className='flex gap-1 items-center font-semibold text-blue-500 hover:text-blue-600 duration-300'
                    href="https://t.me/AnastasiaZahorodnia"
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