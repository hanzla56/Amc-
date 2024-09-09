"use client"
import { useState, useEffect } from 'react';
import Hero from "@/components/Hero"; 
import { franchiesdata } from "@/assets/data"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import JustRelease from '@/components/JustRelease';
import Popularoftheweek from '@/components/Popularoftheweek';

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
      <Hero />
        <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto my-10">
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
              style={{minWidth:`calc(90% / ${cardsPerView})`}}>
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
            <IoIosArrowBack/>
          </button>
        )}

        {/* Next Button */}
        {currentIndex < franchiesdata.length - cardsPerView && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
            onClick={nextCard}>
            <IoIosArrowForward/>
          </button>
        )}
      </div>
      <JustRelease/>
      <Popularoftheweek/>
    </>
  );
}
