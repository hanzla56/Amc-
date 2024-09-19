"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { StarIcons } from '@/assets/Icons';

const Movies = ({ data, title, live }) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const movies_slider = useMediaQuery('(max-width:576px)');
    const movies_slider1 = useMediaQuery('(max-width:768px)');
    const movies_slider2 = useMediaQuery('(max-width:992px)');
    const movies_slider3 = useMediaQuery('(max-width:1150px)');

    useEffect(() => {
        if (movies_slider) {
            setCardsPerView(1.3);
        } else if (movies_slider1) {
            setCardsPerView(2.3);
        } else if (movies_slider2) {
            setCardsPerView(3.3);
        } else if (movies_slider3) {
            setCardsPerView(4);
        }
        else {
            setCardsPerView(4);
        }
    }, [movies_slider, movies_slider1, movies_slider2, movies_slider3])

    const nextCard = () => {
        if (currentIndex < data.length - cardsPerView) {
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
            <div className=" max-w-[1150px] 2xl:max-w-[1550px] mx-auto mt-5 pb-10 mange_container">
                <div className='text-[24px] font-bold my-5 pt-5 flex items-center gap-2'>{title}
                    {live && <div className='bg-[#FF0000] rounded-full p-1 w-fit h-fit'></div>}
                </div>

                {/* Slider Container */}
                <div className="overflow-hidden relative">
                    {currentIndex > 0 && (
                        <div className='absolute z-40 left-0 w-[160px] top-0  bottom-0 flex items-center'
                            style={{ background: "linear-gradient(90deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)" }}>
                            <button
                                className="transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                                onClick={prevCard}>
                                <IoIosArrowBack />
                            </button>
                        </div>
                    )}
                    <div
                        className={`flex w-full gap-5`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {data.map((item, i) => (
                            <div key={i} className='w-full' style={{ minWidth: `calc(93% / ${cardsPerView})` }}>
                                <img src={item?.img.src} alt="image" className='w-full' />
                                <div className='mt-2'>
                                    <h1 className='text-[16px] font-bold'>{item?.title}</h1>
                                    {!live && <div className='text-[12px] flex items-center gap-1 mt-2'>
                                        <StarIcons /> 4.6 <p className='text-[#78828A] text-[12px]'>| Action • Movie</p>
                                    </div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {currentIndex < data.length - cardsPerView && (
                        <div className='absolute right-0 top-0 bottom-0 w-[160px] flex items-center justify-end'
                            style={{ background: "linear-gradient(269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)" }}>
                            <button
                                className="transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
                                onClick={nextCard}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default Movies;
