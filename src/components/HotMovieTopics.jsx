"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hottopics, watchDAta } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MovieIcons, StarIcons } from '@/assets/Icons';

const HotMovieTopics = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const hot_movies = useMediaQuery('(max-width:576px)');
    const hot_movies1 = useMediaQuery('(max-width:768px)');
    const hot_movies2 = useMediaQuery('(max-width:992px)');
    const hot_movies3 = useMediaQuery('(max-width:1150px)');

    // useEffect(()=>{
    //     if(hot_movies){
    //         setCardsPerView(1);
    //     } else if(hot_movies1){
    //         setCardsPerView(2);
    //     } else if(hot_movies2){ 
    //         setCardsPerView(3);
    //     } else if(hot_movies3){
    //         setCardsPerView(4);
    //     }
    //     else{
    //         setCardsPerView(4);
    //     }
    // },[hot_movies, hot_movies1, hot_movies2, hot_movies3])

    const nextCard = () => {
        if (currentIndex < Hottopics.length - cardsPerView) {
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
            <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto mt-10 pb-10">
                <div className='flex justify-between gap-2 items-center my-10'>
                    <h1 className='text-[24px] font-bold '>🔥 Hot Movie Topics</h1>
                    <div className='flex items-center gap-10'>
                        {currentIndex > 0 && (
                            <button
                                className="  bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                                onClick={prevCard}>
                                <IoIosArrowBack />
                            </button>
                        )}
                        {currentIndex < Hottopics.length - cardsPerView && (
                            <button
                                className="bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
                                onClick={nextCard}>
                                <IoIosArrowForward />
                            </button>
                        )}

                    </div>
                </div>

                <div className="slider-container overflow-hidden">
                    <div className={`flex  w-full`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {Hottopics?.map((item, i) => (
                            <div key={i} className='flex flex-col gap-3 w-full' style={{ minWidth: `calc(100% / ${cardsPerView})` }}>
                                <div className='flex gap-3 w-full'>
                                    <div >
                                        <img src={item?.img.src} alt="image" className='min-w-[107px]' />
                                    </div>
                                    <div className='flex items-center gap-8 w-full justify-between h-full pr-2'>
                                        <div className='flex flex-col justify-between gap-3'>
                                            <h1 className='text-[16px] font-bold'>{item?.title}</h1>
                                            <div className='flex items-center text-[#78828A] text-[12px] gap-1'>
                                                <MovieIcons /> Comedy • Action</div>
                                            <div className='text-[12px] flex items-center gap-1'>
                                                <StarIcons /> 4.6 <p className='text-[#78828A]'>| 45 Reviews • 9 Discussion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                    <div>
                                        <img src={item?.img.src} alt="image" className='min-w-[107px]' />
                                    </div>
                                    <div className='flex items-center gap-8 w-full justify-between h-full pr-2'>
                                        <div className='flex flex-col justify-between gap-3'>
                                            <h1 className='text-[16px] font-bold'>{item?.title}</h1>
                                            <div className='flex items-center text-[#78828A] text-[12px] gap-1'>
                                                <MovieIcons /> Comedy • Action</div>
                                            <div className='text-[12px] flex items-center gap-1'>
                                                <StarIcons /> 4.6 <p className='text-[#78828A]'>| 45 Reviews • 9 Discussion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotMovieTopics;

