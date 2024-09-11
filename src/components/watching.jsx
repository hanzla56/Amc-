"use client";
import { useState } from 'react';
import { watchDAta } from "@/assets/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Watching = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    const nextCard = () => {
        if (currentIndex < watchDAta.length - cardsPerView) {
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
            <div className="relative max-w-[1150px] 2xl:max-w-[1550px] mx-auto my-10">
                <h1 className='text-[24px] font-bold my-5'>Continue Watching</h1>

                {/* Slider Container */}
                <div className="slider-container overflow-hidden">
                    <div
                        className={`flex w-full gap-6`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}>
                        {watchDAta.map((item, i) => (
                            <div key={i}  style={{minWidth:`calc(94% / ${cardsPerView})`}}>
                                <img src={item?.img.src} alt="image"  />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                {currentIndex > 0 && (
                    <button
                        className="absolute-left-10 top-1/2 transform -translate-y-1/2 bg-[#28262D] text-white hover:bg-[#D71134] p-2 rounded-full"
                        onClick={prevCard}>
                        <IoIosArrowBack />
                    </button>
                )}
                asd

                {/* Next Button */}
                {currentIndex < watchDAta.length - cardsPerView && (
                    <button
                        className="absolute-right-10 top-1/2 transform -translate-y-1/2 bg-[#28262D] hover:bg-[#D71134] text-white p-2 rounded-full"
                        onClick={nextCard}
                    >
                        <IoIosArrowForward />
                    </button>
                )}
            </div>
        </>
    );
};

export default Watching;
