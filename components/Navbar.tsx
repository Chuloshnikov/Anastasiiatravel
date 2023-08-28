"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/icons/logo.webp';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldShowBackground = Math.min(scrollY / (typeof window !== 'undefined' ? window.innerHeight * 0.5 : 1));
  const shouldShowBorder = Math.min(scrollY / (typeof window !== 'undefined' ? window.innerHeight * 0.5 : 1));

  
  


  return (
    <header 
    className='z-20 fixed w-full flex justify-between mdl:px-16 py-8 xs:px-4'>
      <div
        className={`-z-10 absolute w-full h-full top-0 left-0 ${shouldShowBackground ? 'bg-[#408692] opacity-20' : ''}`}
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
      className='xs:hodden md:inline'
      >
        <ul 
         className={`z-50 xs:hidden lg:flex gap-6 leading-3 px-8 py-8 font-semibold 
         text-base tracking-widest ${shouldShowBackground ? 'border-2 border-yellow-500 rounded-2xl' : ''}`}
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
              ПРО НАС
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
      <div
      className='md:hidden'
      >
        
        <nav>

        </nav>
      </div>
    </header>
  )
}

export default Navbar;