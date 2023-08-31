import MoreAboutUsPage from '@/components/moreaboutus/MoreAboutUsPage';
import React from 'react';
import Head from 'next/head';

export default function Moreaboutus() {
  return (
    <>
        <Head>
        <title>Про нас</title>
        <meta name="description" content="Більше інформації про нас" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main
      className='bg-[#749CBA] w-full h-full'
      >
          <MoreAboutUsPage/>
      </main>
    </>
  )
}
