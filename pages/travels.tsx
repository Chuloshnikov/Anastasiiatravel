import React from 'react';
import Head from 'next/head';
import TravelsPage from '@/components/travels/TravelsPage';

export default function Travels() {
  return (
    <>
      <Head>
        <title>Подорожі</title>
        <meta name="description" content="Some info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
        <div className='text-white mx-auto'>
        </div>
      <main
      className='bg-[#749CBA] w-full h-full'
      >
          <TravelsPage/>
      </main>
    </>
  )
}
