import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import TestimonialForm from '../../../../components/admin/TestimonialForm';
import { getSession, useSession } from 'next-auth/react';

const EditTravelPage = () => {
    const [testimonialInfo, setTestimonialInfo] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get(`/api/testimonialsdata?id=${id}`).then(response => {
        setTestimonialInfo(response.data);
      })
    }, [id]);

    return (
        <AdminLayout>
            <h1 className='my-5 mx-auto text-2xl font-bold text-center'>Редагувати подорож</h1>
            {testimonialInfo && <TestimonialForm {...testimonialInfo} btn="змінити"/>}
        
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

export default EditTravelPage;