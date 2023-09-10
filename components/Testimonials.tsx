import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/cinzel.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import axios from "axios";
import Spinner from "./Spinner";


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios.get('/api/testimonialsdata').then(response => {
          setTestimonials(response.data);
          setLoading(false);
      })
  }, []);
  
  if (testimonials) {
    return (
      <div
      className='text-center bg-gray-100 xs:pt-6 mdl:pt-22 md:pb-22 xs:pb-12'
      id='testimonials'
      >
          <h2
              className={`${styles.cinzelFont} font-base tracking-widest xs:mx-6 xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-900 xs:mb-12 mdl:mb-24 mt-12`}
          >
          ВІДГУКИ
        </h2>
        <div
        className='flex-col justify-center h-full items-center xs:mx-2 mdl:mx-40 border-2 border-[#408692] rounded-lg'
        >
          <div className='rounded-lg'>
                  <Swiper
                  effect={'coverflow'}
                  spaceBetween={30}
                  grabCursor={true}
                  slidesPerView={'auto'}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  centeredSlides={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper bg-gray-100 max-h-[700px] rounded-lg"
              >
                          {!loading ? 
                          testimonials?.map(testimonial => (
                            <SwiperSlide
                            key={testimonial._id}
                            >
                                <Image className='rounded-lg'
                                width={500}
                                height={400} 
                                src={testimonial.img} alt="sliderImg"
                                />
                            </SwiperSlide>
                          )) : (
                          <div 
                          className='min-h-[400px] flex flex-col items-center justify-center'
                          >
                            <Spinner/>
                          </div>)
                        }
                  </Swiper>
              </div>
        </div>
      </div>
    )
  } else {
    return
  }
  
}

export default Testimonials;