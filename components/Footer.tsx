import React from 'react';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { PiTiktokLogoFill } from 'react-icons/pi';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer
    className='mx-8 mt-24 pb-6 flex justify-between'
    >
      <div
      className='flex items-center justify-center xs:ml-0 mdl:ml-20 xs:text-sm mdl:text-lg'
      >
        &copy; Твоя Подорож, 2023
      </div>
      <div
      className='flex gap-2 xs:mr-0 mdl:mr-20 items-center justify-center'
      >
        <div>
          <FaTelegram
          className="w-8 h-8"
          />
        </div>

        
        <div
        className='bg-white rounded-full'
        >
          <PiTiktokLogoFill
          className="m-2 text-[#408692] w-4 h-4"
          />
        </div>
        <div
        className='bg-white rounded-full'
        >
        <AiFillInstagram
        className="m-2 text-[#408692] w-4 h-4"
        />
        </div>
      </div>
    </footer>
  )
}

export default Footer;

