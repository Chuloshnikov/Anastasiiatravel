import Hero from '@/components/Hero';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Anastasiia Travel</title>
        <meta name="description" content="The best pizza in this corner of the Earch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
          <div className='text-white mx-auto'>
              <Hero/>
          </div>
      </main>
    </>
  )
}
