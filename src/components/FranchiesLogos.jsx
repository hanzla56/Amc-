import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { franchiesdata } from '@/assets/data';

export const FranchiesLogos = () => {
   
   
    return (
      <>
        <Swiper
         slidesPerView={5}
          spaceBetween={20}
          centeredSlides={true}
           loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]} 
          className="mySwiper my-10">
            {franchiesdata.map((item,i)=>(
                <SwiperSlide key={i}>
                   <div className='bg-[#08080a] py-[16px] px-[32px] rounded-xl w-fit'>
                   {item.logo}
                   </div>
                </SwiperSlide>
            ))}
           
        </Swiper>
      </>
    )
}
