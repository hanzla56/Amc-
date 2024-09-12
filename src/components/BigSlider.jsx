import React, { useState } from 'react';
import { cardsData } from '@/assets/data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { StarIcons } from '@/assets/Icons';
import Button from '@mui/material/Button'
import { IoPlayCircle } from 'react-icons/io5';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

const BigSlider = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3); // Set default cards per view

    const handleNext = () => {
        if (selectedCardIndex < cardsData.length - cardsPerView) {
            setSelectedCardIndex(selectedCardIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedCardIndex > 0) {
            setSelectedCardIndex(selectedCardIndex - 1);
        }
    };

    const selectedCard = cardsData[selectedCardIndex];

    return (
        <div className="img_slider items-center min-h-screen grid grid-cols-2"
            style={{ background: `linear-gradient(180deg, #0D0C0F 0.08%, rgba(13, 12, 15, 0.0416667) 22.17%, rgba(13, 12, 15, 0.0976244) 58.89%, #0D0C0F 100%),
                linear-gradient(82.22deg, rgba(13, 12, 15, 0.9) 36.24%, rgba(13, 12, 15, 0) 58.67%),url(${selectedCard.imageUrl.src})` }}>

            <div className="max-w-[537px] mx-auto ">
                <h1 className='text-[#F9F9F9] text-[32px] font-bold'>Featured in AMC Streams</h1>
                <p className='text-[#F9F9F9] text-[20px] mt-1'>Best featured for you today</p>
                <div className='bg-[#0000003D] px-2 py-1 my-2 rounded w-fit'>{selectedCard?.cuontry}</div>
                <h1 className="text-[48px] font-bold">{selectedCard.title}</h1>
                <p className='text-[12px] flex items-center gap-1'><StarIcons/> 4.3 |  2h40m • 2022 • Superhero • Actions</p>
                <p className="font-[400] my-4 text-[14px]">{selectedCard.description}...<span className='text-[#F10606] cursor-pointer'>Read more</span></p>
                <div className="flex items-center gap-5 mt-4">
                  <Button variant="contained" className="trailerbtn">
                    <IoPlayCircle /> Play Now
                  </Button>
                  <Button variant="outlined" color="inherit" className="btnadd">
                    <MdOutlineBookmarkBorder /> Add Watchlist
                  </Button>
                </div>
            </div>

            {/* Right section with slider cards */}
            <div className="flex overflow-hidden relative">

                {/* Prev Button */}
                <button
                    onClick={handlePrev}
                    className={`bg-gray-700 z-50 absolute left-2 top-[50%] text-white p-2 rounded-full hover:bg-gray-500 transition-all duration-300 ${selectedCardIndex === 0 ? 'hidden' : ''}`}>
                    <IoIosArrowBack />
                </button>

                {/* Card Slider */}
                <div className=" flex transition-transform duration-500 w-full gap-4"
                    style={{ transform: `translateX(-${selectedCardIndex * (100 / cardsPerView)}%)` }}>
                    {cardsData.map((card, index) => (
                        <div
                            key={card.id}
                            onClick={() => setSelectedCardIndex(index)}
                            className={`w-full img_slider cursor-pointer h-[412px] relative  rounded-[16px] transition-transform duration-300 ${index === selectedCardIndex ? 'border-4 border-[#D71134]' : ''}`}
                            style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 78.02%),
                                url(${card.imageUrl.src})`, minWidth: `calc(95% / ${cardsPerView})` }}>
                             <div className='absolute bottom-5 left-5'>
                                <h1 className='text-[16px] font-bold'>{card.title}</h1>
                                <p className='text-[12px] flex items-center gap-1 mt-1'>
                                    <StarIcons/> 4.6 <span className='text-[#78828A]'>| Mystery • Movie</span></p>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={` absolute  top-0 bottom-0 right-0 flex w-[160px] justify-end items-center transition-all duration-300 `}
                    
                    style={{background:' linear-gradient(270deg, #0D0C0F 6.29%, rgba(13, 12, 15, 0.9) 35.62%, rgba(13, 12, 15, 0.74) 51.06%, rgba(13, 12, 15, 0) 105.09%, #0D0C0F 105.09%)'
                    }}>
                  <div className={`bg-gray-700  text-white w-fit p-2 rounded-full hover:bg-gray-500
                     ${selectedCardIndex >= cardsData.length - cardsPerView ? 'hidden' : ''}`}>
                  <IoIosArrowForward />
                  </div>
                </button>
            </div>
        </div>
    );
};

export default BigSlider;
