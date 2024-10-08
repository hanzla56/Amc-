"use client";
import { useState,useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Releasedata } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '@/components/Mobile_nav';


const JustRelease = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(5);
    const matches = useMediaQuery('(max-width:1250px)');
    const matches1 = useMediaQuery('(max-width:768px)');
    const matches2 = useMediaQuery('(max-width:992px)');
    const matches3 = useMediaQuery('(max-width:1150px)');

    useEffect(()=>{
       if(matches){
        setCardsPerView(4)
       }
    },[matches])


    const nextCard = () => {
        if (currentIndex < Releasedata.length - cardsPerView) {
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
            <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto my-10 mange_container">
                <h1 className='text-[24px] font-bold my-5'>Just Release</h1>

                {/* Slider Container */}
                <div className="slider-container overflow-hidden">
                    <div className={`flex w-full gap-6`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {Releasedata.map((item, i) => (
                            <div key={i}  style={{minWidth:`calc(94% / ${cardsPerView})`}}>
                                <img src={item?.img.src} alt="image"  />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                {currentIndex > 0 && (
                  <div className='absolute left-0 w-[160px] top-10 bottom-0 flex items-center'
                  style={{background: "linear-gradient(90deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}> 
                      <button className="transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                        onClick={prevCard}>
                        <IoIosArrowBack />
                    </button>
                  </div>
                )}

                {/* Next Button */}
                {currentIndex < Releasedata.length - cardsPerView && (
                  <div  className='absolute right-0 top-10 bottom-0 w-[160px] flex items-center justify-end'
                  style={{background: "linear-gradient(269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}>
                      <button className="transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
                        onClick={nextCard}>
                        <IoIosArrowForward />
                    </button>
                  </div>
                )}
            </div>
        </>
    );
};

export default JustRelease;
