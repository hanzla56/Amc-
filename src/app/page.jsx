"use client"
import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import { franchiesdata, moviesdata, Seriesdata, Streamdata, Livedata, herodata1 } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import JustRelease from '@/components/JustRelease';
import Popularoftheweek from '@/components/Popularoftheweek';
import BigSlider from '@/components/BigSlider';
import Movies from '@/components/Movies';
import Footer from '@/components/Footers';
import Reels from '@/components/Reels';
import Navbar from '@/components/Mobile_nav';
import Button from '@mui/material/Button'

export default function Home() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 5;

  const nextCard = () => {
    if (currentIndex < franchiesdata.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };



  return (
    <>
      <Navbar />
      <div className='flex items-center h-[47px] rounded-lg overflow-hidden absolute w-full
       bg-[#000000] max-w-[487px] top-40 z-10 left-1/2 right-1/2' 
      style={{transform: 'translate(-50%, -50%)'}}>
        <input type="text" placeholder='Search Movies, TV Shows and more...'
          className='p-2 pl-3 w-full bg-transparent outline-none border-none' />
        <Button variant="outlined" color="inherit" className='p-2 px-5 capitalize rounded-lg'>
          Search</Button>
      </div>
      <Hero herodata={herodata1} />
      <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto my-10 mange_container">

        {/* Slider Container */}
        <div className="slider-container">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: 'transform 0.4s ease-in-out',
            }}>
            {franchiesdata.map((item, i) => (
              <div key={i} className='bg-[#08080a] h-[88px] w-full flex items-center justify-center rounded-xl'
                style={{ minWidth: `calc(90% / ${cardsPerView})` }}>
                {item.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
            onClick={prevCard}
          >
            <IoIosArrowBack />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < franchiesdata.length - cardsPerView && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
            onClick={nextCard}>
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <JustRelease />
      <Popularoftheweek />
      <BigSlider />
      <Movies data={moviesdata} url="/movie" title="Movies" live={false} />
      <Movies data={Seriesdata} url="/series" title="Series" live={false} />
      <Movies data={Streamdata} title="AMC Streams Exclusives" live={false} />
      <Movies data={Livedata} title="Live" live={true} />
      <Reels title="Featured Reels" />
      <Footer />
    </>
  );
}
