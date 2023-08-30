import React from 'react';
import Travel from './Travel';

const TravelsPage = () => {
  return (
    <section
    className='flex justify-center items-center'
    >
      <div>
          <div
          className='flex flex-col gap-10 pt-[12%] pb-[10%]'
          >
            <Travel/>
            <Travel/>
          </div>
      </div>
    </section>
  )
}

export default TravelsPage;