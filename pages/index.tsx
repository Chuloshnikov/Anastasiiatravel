import AboutUs from '@/components/AboutUs';
import ContactWithUs from '@/components/ContactWithUs';
import Hero from '@/components/Hero';
import MeinGalery from '@/components/MeinGalery';
import SocialPages from '@/components/SocialPages';
import SpecialAbout from '@/components/SpecialAbout';
import Testimonials from '@/components/Testimonials';
import UpcomingTrips from '@/components/UpcomingTrips';
import Head from 'next/head';


export default function Home() {


  return (
    <>
      <Head>
        <title>Anastasiia Travel</title>
        <meta name="description" content="Твоя незабутня подорож" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
        <div className='text-white mx-auto'>
            <Hero/>
        </div>
      <main>
          <UpcomingTrips/>
          <AboutUs/>
          <SocialPages/>
          <MeinGalery/>
          <SpecialAbout/>
          <Testimonials/>
          <ContactWithUs/>
      </main>
    </>
  )
}
