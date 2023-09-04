import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout'
import TravelForm from '@/components/admin/TravelForm';
import { getSession, useSession } from 'next-auth/react';

export default function NewTravel() {
    const { data: session } = useSession();

  return (
    <AdminLayout>
      <div className=''>
        <div className='flex justify-center items-center'>
            <h2 className='text-white mb-5 text-xl font-bold text-2xl mt-6'>ДOДАТИ НОВУ ПОДОРОЖ</h2>
        </div>
        <div
        className='max-h-screen'
        >
          <TravelForm/>
        </div>
            
      </div>  
    </AdminLayout>
  )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if(!session) {
      return {
        redirect: {
          destination: '/admin',
          permanent: false
        }
      }
    }
  
    return {
      props: { session }
    } 
  }