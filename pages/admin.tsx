import React, { useState, FormEvent } from 'react';
import { useSession, signIn } from "next-auth/react";
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
  const [username, setUserName] = useState<String>();
  const [password, setPassword] = useState<String>();
  
  const {data: session } = useSession();
  console.log(session);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    signIn('credentials', { username, password});
}
    
  if (!session) {
    return (
      <div className='flex bg-[#749CBA] items-center h-screen w-full'>
      <div className='flex flex-col items-center text-center w-full'>
          <div className='border p-5 bg-white'>
              <h2 className='text-yellow-950 text-bold text-2xl mb-2'>Адмін панель</h2>
              <form onSubmit={handleSubmit} className='flex flex-col gap-2 text-black'>  
              <input 
              onChange={e => setUserName(e.target.value)}
              value={username}
              type="text"
              name="username" 
              placeholder='Enter your username...'
              required
              />
              <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password" 
              name="password"
              placeholder='Enter your password...'
              required
              />
              <button 
                  type="submit"
                  className='bg-[#749CBA] text-white p-1 px-2 text-base font-semibold
                      hover:bg-[#5484a8] duration-300
                      '>
                      Логін
              </button>
              </form>
          </div>
      </div>
  </div>
    )
  }

  return (
    <div className='bg-[#749CBA] flex h-screen w-full mx-auto'>
        <AdminLayout>
            <AdminDashboard/>
        </AdminLayout>
    </div>
  )
}

export default Admin;