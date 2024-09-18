import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import { IoPlayCircle } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Web_nav from "./web_nav";

const Hero = ({herodata}) => {

 

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {herodata?.map((item, i) => (
          <SwiperSlide key={item.id || i}>
            <div className="min-h-screen relative bg-no-repeat bg-cover w-full h-full bg-center hero_imgs"
              style={{
                backgroundImage: `linear-gradient(358.93deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #0D0C0F 103.18%), url(${item?.img.src})`,}}>
              <div className="absolute bottom-10 2xl:bottom-20 left-0 mx-auto right-0 z-10 max-w-[1150px] 2xl:max-w-[1550px]">

                <div className="hero_text">
                <Button
                  variant="contained"
                  className="btnadd"
                  style={{ background: "#0D0C0F", borderRadius: "50px" }}>
                  {item?.category}
                </Button>
                <h1 className="text-[32px] font-bold mt-2">{item?.title}</h1>
                <p className="2xl:text-[16px] text-[14px] my-3">{item?.time}</p>
                <p className="2xl:text-[16px] text-[14px] max-w-[550px] my-3">
                  {item?.desc}
                </p>
                <div className="flex items-center gap-10 mt-4">
                  <Button variant="contained" className="trailerbtn">
                    <IoPlayCircle /> Watch Trailer
                  </Button>
                  <Button variant="outlined" color="inherit" className="btnadd">
                    <MdOutlineBookmarkBorder /> Add Watchlist
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Web_nav/>
     

    </>
  );
};

export default Hero;
