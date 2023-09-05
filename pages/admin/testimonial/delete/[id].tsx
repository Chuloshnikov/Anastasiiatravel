import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';


const DeleteProductPage = () => {
    const router = useRouter();
    const [testimonialInfo, setTestimonialInfo] = useState();
    const { data: session } = useSession();

    const {id} = router.query;
    
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/api/testimonialsdata?id=${id}`).then(response => {
            setTestimonialInfo(response.data);
        });
    }, [id]);

    const goBack = () => {
        router.push('/admin/testimonials');
    }

    const deleteTestimonial = async () => {
      await axios.delete(`/api/testimonialsdata?id=${id}`);
        goBack();
    }

  return (
    <AdminLayout>
        <div className='mb-[8%] mt-[8%]'>
            <h1 className='text-center text-2xl text-yellow-950 font-semibold mb-8'>
                Ви точно бажаєте видалити подорож &nbsp;&quot;{testimonialInfo?._id}&quot;?
            </h1>
            <div className='flex gap-1 justify-center'>
                <button 
                    className='bg-red-500 text-white p-1 px-8 text-base font-semibold
                    hover:bg-red-600 duration-300 rounded-lg'
                    onClick={deleteTestimonial}
                    >
                    Так
                </button>
                <button 
                    className='bg-gray-600 text-white p-1 px-8 text-base font-semibold
                    hover:bg-gray-800 duration-300 rounded-lg' 
                    onClick={goBack}
                    >
                    НІ
                </button>
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

export default DeleteProductPage;