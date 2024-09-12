import React, { useState } from 'react';
import { thumbnails, watchDAta } from '@/assets/data';
import { Button } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoPlayCircle } from 'react-icons/io5';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

const MoviesThumbnail = () => {
    const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
    const [cardsPerView] = useState(4); // Number of cards per view

    const handleNext = () => {
        if (selectedGenreIndex < watchDAta.length - cardsPerView) {
            setSelectedGenreIndex(selectedGenreIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedGenreIndex > 0) {
            setSelectedGenreIndex(selectedGenreIndex - 1);
        }
    };

    return (
        <div className="min-h-screen img_slider relative"
            style={{ backgroundImage: `url(${thumbnails[selectedGenreIndex].imageUrl})` }}>
         
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

         
            <div className="relative z-10 p-8 text-white">
                <h1 className="text-6xl font-bold">{thumbnails[selectedGenreIndex].title}</h1>
                <p className="mt-4 text-xl">2h30m | 2022 | Superhero | Action</p>
                <div className="mt-2 flex items-center space-x-2">
                    <span className="text-yellow-400 text-lg">★ 4.6</span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                    <Button variant="contained" className="trailerbtn">
                        <IoPlayCircle /> Play Now
                    </Button>
                    <Button variant="outlined" color="inherit" className="btnadd">
                        <MdOutlineBookmarkBorder /> Add Watchlist
                    </Button>
                </div>
            </div>

        
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full">
                <div className="flex items-center justify-between w-full">
                   
                    <button onClick={handlePrev} className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition-all">
                        <IoIosArrowBack />
                    </button>

                 
                    <div className="overflow-hidden w-full mx-4">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${selectedGenreIndex * (100 / cardsPerView)}%)` }}>
                            {thumbnails.map((genre, index) => (
                                <div
                                    key={genre.id}
                                    className={`h-[100px] rounded-2xl transition-transform duration-300 ${index === selectedGenreIndex ? 'border-2 border-red-600' : ''}`}
                                    style={{
                                        backgroundImage: `url(${genre.imageUrl})` ,
                                        backgroundPosition: 'center',
                                        width: `calc(100% / ${cardsPerView})`,
                                       
                                    }}
                                    onClick={() => setSelectedGenreIndex(index)}>
                                    <div className={`bg-opacity-60 w-full h-full flex items-center justify-center text-white
                                        ${index === selectedGenreIndex ? ' bg-[#EE280D26]' : "bg-[#16181EB2]"}`}>
                                        {genre.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button onClick={handleNext} className={`bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition-all`}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoviesThumbnail;
