import React, { useState } from 'react';
import { thumbnails, watchDAta } from '@/assets/data';
import { Button } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoPlayCircle } from 'react-icons/io5';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { StarIcons } from '@/assets/Icons';



const MoviesThumbnail = () => {


    const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
    const [cardsPerView] = useState(6);
    const handleNext = () => {
        if (selectedGenreIndex < thumbnails.length - cardsPerView) {
            setSelectedGenreIndex(selectedGenreIndex + 1);
        }
    };
    const handlePrev = () => {
        if (selectedGenreIndex > 0) {
            setSelectedGenreIndex(selectedGenreIndex - 1);}
    };

    return (
        <div className="h-[600px] img_slider relative"
            style={{
                background: `linear-gradient(180deg, #0D0C0F 0.08%, rgba(13, 12, 15, 0.0416667) 22.17%, rgba(13, 12, 15, 0.0976244) 58.89%, #0D0C0F 100%),
                linear-gradient(82.22deg, rgba(13, 12, 15, 0.9) 36.24%, rgba(13, 12, 15, 0) 58.67%)
                 ,url(${thumbnails[selectedGenreIndex].imageUrl})`
            }}>


            <div className="relative z-10 text-white max-w-[1150px] 2xl:max-w-[1550px] mx-auto mt-auto pt-5">
                <div className='bg-[#0000003D] px-2 py-1 rounded w-fit my-5'>Explore by the genre</div>
                <h1 className="text-[48px] font-bold leading-[54px] max-w-[537px]">{thumbnails[selectedGenreIndex].title}</h1>
                <p className="mt-4 text-[12px] flex items-center gap-1 my-2"><StarIcons /> 4.5 |  2h40m • 2022 • Superhero • Actions</p>

                <div className="flex items-center gap-5 mt-5">
                    <Button variant="contained" className="trailerbtn">
                        <IoPlayCircle /> Play Now
                    </Button>
                    <Button variant="outlined" color="inherit" className="btnadd">
                        <MdOutlineBookmarkBorder /> Add Watchlist
                    </Button>
                </div>

                <div className='flex items-center mt-6 gap-5'>
                    <button onClick={handlePrev} className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition-all">
                        <IoIosArrowBack />
                    </button>

                    <button onClick={handleNext} className={`bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition-all 
                         ${selectedGenreIndex >= thumbnails.length - cardsPerView ? 'hidden' : ''}`}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>


            <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-full ">
                <div className="flex items-center justify-between w-full">

                   <div  className='absolute z-50 left-0 w-[160px] h-full flex items-center justify-start pl-5'
                      style={{background: "linear-gradient(-269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}>
                   <button onClick={handlePrev} className="bg-gray-700 text-white p-2
                     rounded-full hover:bg-gray-500 transition-all">
                        <IoIosArrowBack />
                    </button>
                   </div>


                    <div className="overflow-hidden w-full mx-4">
                        <div
                            className=" flex transition-transform duration-500 w-full gap-4"
                            style={{ transform: `translateX(-${selectedGenreIndex * (100 / cardsPerView)}%)` }}>
                            {thumbnails.map((genre, index) => (
                                <div
                                    key={index}
                                    className={`h-[100px] rounded-2xl transition-transform duration-300 ${index === selectedGenreIndex ? 'border-2 border-red-600' : ''}`}
                                    style={{
                                        backgroundImage: `url(${genre.imageUrl})`,
                                        minWidth: `calc(95% / ${cardsPerView})`,}}
                                    onClick={() => setSelectedGenreIndex(index)}>
                                    <div className={`bg-opacity-60 w-full h-full flex items-center justify-center text-white
                                        ${index === selectedGenreIndex ? ' bg-[#EE280D26]' : ""}`}>
                                        {genre.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                     <div
                     className='absolute right-0 w-[160px] h-full flex items-center justify-end pr-5'
                      style={{background: "linear-gradient(269.96deg, #0D0C0F 18.88%, rgba(13, 12, 15, 0) 99.97%, #0D0C0F 99.97%)"}}>
                    <button onClick={handleNext} className={`bg-gray-700 text-white p-2 rounded-full hover:bg-red-500
                     transition-all 
                         ${selectedGenreIndex >= thumbnails.length - cardsPerView ? 'hidden' : ''}`}>
                        <IoIosArrowForward />
                    </button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesThumbnail;