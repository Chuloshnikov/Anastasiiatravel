import React from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import {  FaSignOutAlt } from "react-icons/fa";

const AdminLayout = ({ children } :any ) => {
  return (
    <div className='mx-auto max-h-screen w-full flex flex-col bg-[#749CBA]'>
        <div className='flex flex-col xs:mt-[30%] mdl:mt-[15%] max-w-[300px] mx-auto'>
            <nav
            
            >
                <ul 
                className='flex items-center justify-center gap-5 bg-[#408692] text-yellow-950 mt-[5%] py-5 px-10'>
                    <li>
                        <Link 
                        className='text-white font-semibold underline'
                        href="/admin">
                            Подорожі
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className='text-white font-semibold underline'
                        href="/admin/testimonials">
                            Відгуки
                        </Link>
                    </li>
                    <li>
                        <FaSignOutAlt onClick={() => signOut()} className="cursor-pointer text-white"/>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='bg-[#749CBA] flex-grow p-4 mb-12'>
                {children}
        </div>
    </div>
  )
}

export default AdminLayout;