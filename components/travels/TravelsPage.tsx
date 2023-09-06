import React, { useState, useEffect } from 'react';
import Travel from './Travel';
import axios from 'axios';
import Spinner from '../Spinner';

const TravelsPage = () => {
  const [travels, setTravels] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/travelsdata').then(response => {
      setTravels(response.data);
      setIsLoading(false);
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
            {travels ? travels?.map(travel => <Travel travel={travel}/>) : (
              <div
              className='bg-[#749CBA] text-center md:pt-22 md:pb-22 xs:pt-6 xs:pb-12'
              >
                <Spinner/>
              </div>
            )}
          </div>
      </div>
    </section>
  )
}

export default TravelsPage;