import React, { useState, useEffect } from 'react';
import Travel from './Travel';
import axios from 'axios';

const TravelsPage = () => {
  const [travels, setTravels] = useState<any>([]);
  

  useEffect(() => {
    axios.get('/api/travelsdata').then(response => {
      setTravels(response.data);
    })
  },[])
  return (
    <section
    className='flex justify-center items-center'
    >
      <div>
          <div
          className='flex flex-col gap-10 pt-[12%] pb-[10%]'
          >
            {travels?.map(travel => <Travel travel={travel}/>)}
          </div>
      </div>
    </section>
  )
}

export default TravelsPage;