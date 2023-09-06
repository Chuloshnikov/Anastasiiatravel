import React from 'react';
import Image from 'next/image';
import styles from '../styles/cinzel.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';

import test from '../assets/images/testimonials/test1.jpg';



const Testimonials = ({ testimonials }) => {
  return (
    <div
    className='text-center bg-gray-100 xs:pt-6 mdl:pt-22 md:pb-22 xs:pb-12'
    id='testimonials'
    
    >
        <h2
            className={`${styles.cinzelFont} font-base tracking-widest xs:mx-6 xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-900 xs:mb-12 mdl:mb-24`}
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
                        {
                        testimonials?.map(testimonial => (
                          <SwiperSlide
                          key={testimonial._id}
                          >
                              <img className='rounded-lg' 
                              src={testimonial.img} alt="sliderImg"
                              />
                          </SwiperSlide>
                        ))
                      }
                </Swiper>
            </div>
      </div>
    </div>
  )
}

export default Testimonials;