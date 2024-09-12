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
import Login from "./Login";
import Signup from "./Signup";
import Plan from "./Plan";
import EmailVerification from "./EmailVerification";

const Hero = ({herodata}) => {


  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isPlan, setIsPlan] = useState(false);
  const [isVerify, setisVerify] = useState(false);

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {herodata?.map((item, i) => (
          <SwiperSlide key={item.id || i}>
            <div
              className="min-h-screen relative bg-no-repeat bg-cover w-full h-full bg-center "
              style={{
                backgroundImage: `linear-gradient(358.93deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #0D0C0F 103.18%), url(${item?.img.src})`,
              }}
            >
              <div
                className="absolute bottom-10 2xl:bottom-20
                             left-0 mx-auto right-0 z-10 max-w-[1150px] 2xl:max-w-[1550px]">
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="fixed top-5 left-0 right-0 z-50 w-full max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <div>
            <img src={logo.src} alt="logo" />
          </div>
          <div className="flex items-center gap-5">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/">AMC Kids</Link>
            <Link href="/">Influence</Link>
            <Link href="/">Español</Link>
          </div>
          <div className="flex items-center gap-5">
            <Button onClick={() => setIsLogin(true)} variant="outlined" color="inherit" className="btnadd">
              Sign up
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              className="trailerbtn"
            >
              Login
            </Button>
            {/* <Button
              onClick={() => setIsPlan(true)}
              variant="contained"
              className="trailerbtn"
            >
              Plan
            </Button>
            <Button
              onClick={() => setisVerify(true)}
              variant="contained"
              className="trailerbtn"
            >
              Verify
            </Button> */}
          </div>
        </div>
      </div>
      <Login open={open} setOpen={setOpen} />
      <Signup open={isLogin} setOpen={setIsLogin} />
      <Plan open={isPlan} setOpen={setIsPlan} />
      <EmailVerification open={isVerify} setOpen={setisVerify} />

    </>
  );
};

export default Hero;
