"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/icons/logo.webp';

const Navbar = () => {

  const {openMenu, setOpenMenu} = useState(false);

  return (
    <div 
    className='stiky flex justify-between mdl:px-16 py-8 xs:px-4'
    >
      <div 
      className='flex font-bold items-center justify-center text-2xl tracking-tighter'
      >
        <Image
        className='h-[62px] w-[62px] rounded-full border-4 border-white'
        src={logo} alt="logo"/>
        <div
        className='-ml-2'
        >
            <p>
              Anastasiia
            </p>
            <p 
            className='text-6xl -mt-4'
            >
              Travel
            </p>
        </div>
      </div>
      <nav
      >
        <ul 
        className='xs:hidden lg:flex gap-6 leading-3 mx-8 my-8 font-semibold text-base tracking-widest'
        >
          <li>
            <Link 
            className="text-underline-animation text-underline-left hover:text-underline-left-hover"
            href="/"
            rel="noopener noreferrer"
            >
              ПОДОРОЖІ
            </Link>
          </li>
          <li>
            <Link 
            className="text-underline-animation text-underline-center hover:text-underline-center-hover"
            href="/"
            rel="noopener noreferrer"
            >
              ПРО МЕНЕ
            </Link>
          </li>
          <li>
            <Link 
            className="text-underline-animation text-underline-right hover:text-underline-right-hover"
            href="/"
            rel="noopener noreferrer"
            >
              ВІДГУКИ
            </Link>
          </li>
          <li>
            <Link 
            className="text-underline-animation left hover:left-hover"
            href="/"
            rel="noopener noreferrer"
            >
              КОНТАКТИ
            </Link>
          </li>
          <li>
            <Link
            className="text-underline-animation left hover:left-hover" 
            href="/"
            rel="noopener noreferrer"
            >
              ІНФО
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;