import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import TravelForm from '../../../../components/admin/TravelForm';
import { getSession, useSession } from 'next-auth/react';

const EditTravelPage = () => {
    const [travelInfo, setTravelInfo] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get(`/api/travelsdata?id=${id}`).then(response => {
        setTravelInfo(response.data);
      })
    }, [id]);

    return (
        <AdminLayout>
            <h1 className='my-5 mx-auto text-2xl font-bold text-center'>Редагувати подорож</h1>
            {travelInfo && <TravelForm {...travelInfo}/>}
        
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