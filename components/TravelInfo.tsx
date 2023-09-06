import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Travel from '../components/travels/Travel';

const TravelInfo = () => {
  const [travel, setTravel] = useState(null);
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/travelsdata?id=${id}`).then(response => {
      setTravel(response.data);
    })
  }, [id]);


  return (
    <section
    className='flex justify-center items-center'
    >
      <div>
          <div
          className='flex flex-col gap-10 pt-[12%] pb-[10%]'
          >
          <Travel travel={travel}/>
          </div>
      </div>
    </section>
  )
}

export default TravelInfo;