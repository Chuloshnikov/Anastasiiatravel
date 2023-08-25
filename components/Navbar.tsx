"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/icons/logo.webp';

const Navbar = () => {

  const {openMenu, setOpenMenu} = useState(false);

  return (
    <header 
    className='z-20 fixed w-full flex justify-between mdl:px-16 py-8 xs:px-4'
    >
      <div
      className='-z-20 absolute w-full h-full bg-yellow-700 top-0 left-0 opacity-20'
      >
      </div>
      <Link 
      className='flex font-bold items-center justify-center text-2xl tracking-tighter'
      href="/"
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
      </Link>
      <nav
      >
        <ul 
        className='z-50 xs:hidden lg:flex gap-6 leading-3 px-8 py-8 font-semibold text-base tracking-widest border-2 border-yellow-500'
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
    </header>
  )
}

export default Navbar;