"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/icons/logo.webp';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePhone } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

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

  
  const toogleMenu = () => {
    setOpenMenu(!openMenu);

  }

 




  return (
    <header 
    className='z-20 fixed w-full flex justify-between mdl:px-16 mdl:py-8 xs:px-4 xs:py-4'>
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
            href="/travels"
            rel="noopener noreferrer"
            >
              ПОДОРОЖІ
            </Link>
          </li>
          <li>
            {router.pathname !== '/'  ? (
            <Link
                  className="text-underline-animation text-underline-center hover:text-underline-center-hover"
                  href='/#about'
            rel="noopener noreferrer"
            
            >
              ПРО НАС
            </Link>
            ) : (
              <Link 
                  className="text-underline-animation text-underline-center hover:text-underline-center-hover"
                  href='#about'
                  rel="noopener noreferrer"
            >
              ПРО НАС
            </Link>
            )
          }
          </li>
          <li>
          {router.pathname !== '/'  ? (
            <Link
                  className="text-underline-animation text-underline-center hover:text-underline-center-hover"
                  href='/#testimonials'
            rel="noopener noreferrer"
            
            >
              ВІДГУКИ
            </Link>
            ) : (
              <Link 
                  className="text-underline-animation text-underline-center hover:text-underline-center-hover"
                  href='#testimonials'
                  rel="noopener noreferrer"
            >
              ВІДГУКИ
            </Link>
            )
          }
          </li>
          <li>
            <Link
            className="text-underline-animation left hover:left-hover" 
            href="/faq"
            rel="noopener noreferrer"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <div
      className='xs:inline lg:hidden'
      >
        <div
        onClick={toogleMenu}
        >
          <GiHamburgerMenu 
          className="text-white w-8 h-8"
          />
        </div>
        <AnimatePresence>
        {openMenu && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="mobile-menu"
            onClick={toogleMenu}
          >
            <ul
            className=' bg-[#408692] w-[300px] h-[400px] p-8 absolute right-5 top-5 flex flex-col gap-5 opacity-80'
            >
              <li>
                <Link
                    className="text-underline-animation text-underline-left hover:text-underline-left-hover"
                    href="/travels"
                    rel="noopener noreferrer"
                  >
                    ПОДОРОЖІ
              </Link>
          </li>
              <li>
                <Link
                    className="text-underline-animation text-underline-center hover:text-underline-center-hover"
                    href='#about'
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
                    href="/faq"
                    rel="noopener noreferrer"
                  >
                    FAQ
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
        
      </div>
      {/*phone button*/}
      <a className='xs:block absolute xs:top-[520%] xs:right-[10%] xl:top-[550%] xl:right-[20%]' href="tel:+38-093-996-10-87">
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }} 
                    animate={{ rotate: [0, 30, -30, 0], scale: 1.1 }}
                    transition={{repeat: Infinity, duration: 0.8}}
                    className="p-1 rounded-full bg-[#408692] shadow-lg"
                    >
                      <AiOutlinePhone className='w-11 h-11 text-white'/>
                  </motion.div>
                  </a>
    </header>
  )
}

export default Navbar;