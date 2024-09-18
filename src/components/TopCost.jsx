"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { profildata, Releasedata } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TopCost = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView,setCardsPerView] = useState(6);
    const topcast = useMediaQuery('(max-width:576px)');
    const topcast1 = useMediaQuery('(max-width:768px)');
    const topcast2 = useMediaQuery('(max-width:992px)');
    const topcast3 = useMediaQuery('(max-width:1150px)');

    useEffect(()=>{
        if(topcast){
            setCardsPerView(1);
        } else if(topcast1){
            setCardsPerView(3);
        } else if(topcast2){ 
            setCardsPerView(4);
        } else if(topcast3){
            setCardsPerView(5);
        }
        else{
            setCardsPerView(6);
        }
    },[topcast, topcast1, topcast2, topcast3])

    const nextCard = () => {
        if (currentIndex < profildata.length - cardsPerView) {
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
            <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto mange_container">
                <h1 className='text-[24px] font-bold my-10'>Top Cast</h1>

                {/* Slider Container */}
                <div className="pb-7 overflow-hidden">
                    <div
                        className={`flex w-full gap-6`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {profildata.map((item, i) => (
                            <div key={i} className='flex items-center gap-4' style={{minWidth:`calc(94% / ${cardsPerView})`, justifyContent:"center"}}>
                                <img src={item?.img.src} alt="image"  />
                                <div>
                                    <h1 className='text-[16px] font-[600]'>{item?.title}</h1>
                                    <p className='text-[#9CA4AB] text-[12px] font-semibold'>{item?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                {currentIndex > 0 && (
                  <div className='absolute left-0 w-[160px] top-1/2 bottom-0 flex items-center'
                  style={{background: "linear-gradient(90deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}> 
                      <button
                        className="transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                        onClick={prevCard}>
                        <IoIosArrowBack />
                    </button>
                  </div>
                )}

                {/* Next Button */}
                {currentIndex < profildata.length - cardsPerView && (
                  <div  className='absolute right-0 top-1/2 bottom-0 w-[160px] flex items-center justify-end'
                  style={{background: "linear-gradient(269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}>
                      <button
                        className="transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
                        onClick={nextCard}>
                        <IoIosArrowForward />
                    </button>
                  </div>
                )}
            </div>
        </>
    );
};

export default TopCost;
