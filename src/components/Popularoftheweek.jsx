"use client";
import { useState,useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { dataweek } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MovieIcons, StarIcons } from '@/assets/Icons';

const Popularoftheweek = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const pop_weeks = useMediaQuery('(max-width:576px)');
    const pop_weeks1 = useMediaQuery('(max-width:768px)');
    const pop_weeks2 = useMediaQuery('(max-width:992px)');
    const pop_weeks3 = useMediaQuery('(max-width:1150px)');

    useEffect(()=>{
        if(pop_weeks){
            setCardsPerView(1.3);
        } else if(pop_weeks1){
            setCardsPerView(2);
        } 
    },[pop_weeks, pop_weeks1, pop_weeks2])

    const nextCard = () => {
        if (currentIndex < dataweek.length - cardsPerView) {
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
            <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto mt-5 pb-10 mange_container">
                <h1 className='text-[24px] font-bold my-5'>Popular of the week</h1>

                {/* Slider Container */}
                <div className="slider-container overflow-hidden">
                    <div
                        className={`flex w-full`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {dataweek.map((item, i) => (
                            <div key={i} className='flex gap-3 w-full' style={{ minWidth: `calc(100% / ${cardsPerView})` }}>
                                <div>
                                    <img src={item?.img.src} alt="image" className='min-w-[107px]'/>
                                </div>
                               <div className='flex items-center gap-8 w-full justify-between h-full pr-2'>
                               <div className='flex flex-col justify-between gap-2'>
                                    <p className='border-[#28262D] px-2 py-1 rounded border-[1px] w-fit text-[12px]'>PG-13</p>
                                    <h1 className='text-[16px] font-bold'>{item?.title}</h1>
                                    <div className='flex items-center text-[#78828A] text-[12px] gap-1'>
                                        <MovieIcons /> {item?.category}</div>
                                    <div className='text-[12px] flex items-center gap-1'>
                                        <StarIcons /> {item?.rate} <p className='text-[#78828A]'>| Movie</p>
                                    </div>
                                </div>
                                <h1 className='text-[48px] font-bold'>{i+1}</h1>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                {currentIndex > 0 && (
                    <div className='absolute left-0 w-[160px] top-10 bottom-0 flex items-center'
                        style={{ background: "linear-gradient(90deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)" }}>
                        <button
                            className="transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                            onClick={prevCard}>
                            <IoIosArrowBack />
                        </button>
                    </div>
                )}

                {/* Next Button */}
                {currentIndex < dataweek.length - cardsPerView && (
                    <div className='absolute right-0 top-10 bottom-0 w-[160px] flex items-center justify-end'
                        style={{ background: "linear-gradient(269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)" }}>
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

export default Popularoftheweek;
