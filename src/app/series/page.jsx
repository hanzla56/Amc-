"use client"
import React from 'react'
import imgser from "@/assets/ser.png"
import logo from "@/assets/logo.png"
import Button from '@mui/material/Button'
import { IoPlayCircle } from 'react-icons/io5';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { FiDownload } from "react-icons/fi";
import { RiShareLine } from "react-icons/ri";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TopCost from '@/components/TopCost';
import TabComponent from '@/components/TabComponent';
import { imageseries, watchList } from '@/assets/data'
import Movies from '@/components/Movies'
import Footer from '@/components/Footer'
import Link from 'next/link'


const Series = () => {


    return (
        <>
            <div className={`h-screen back_img`}
                style={{ background: `linear-gradient(358.93deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #0D0C0F 103.18%),url(${imgser.src})` }}>
                <div className='max-w-[1150px] 2xl:max-w-[1550px] mx-auto '>

                    <div className='py-10 flex flex-col gap-5 '>
                        <div>
                            <img src={logo.src} alt="image" />
                        </div>
                        <Link href={"/"}> <Button variant="outlined" color="inherit" className="btnadd">
                                <IoIosArrowBack /> Back
                            </Button></Link>
                    </div>
                    <div
                        className="absolute bottom-10 2xl:bottom-20
                             left-0 mx-auto right-0 z-10 max-w-[1150px] 2xl:max-w-[1550px]">
                        <Button
                            variant="contained"
                            className="btnadd"
                            style={{ background: "#0D0C0F", borderRadius: "50px" }}>
                            Series
                        </Button>
                        <h1 className="text-[32px] font-bold mt-2">The Last Of Us Season 1</h1>
                        <p className="2xl:text-[14px] text-[14px] mb-2">9 Episodes • 2022 • Fantasy • Actions</p>

                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-5 mt-4">
                                <Button variant="contained" className="trailerbtn">
                                    <IoPlayCircle /> Continue Watching
                                </Button>
                                <Button variant="outlined" color="inherit" className="btnadd">
                                    <MdOutlineBookmarkBorder /> Add Watchlist
                                </Button>
                            </div>
                            <div className='flex itmes-center gap-5'>
                                <Button variant="contained" className='btnlike'><FiDownload />  Download</Button>
                                <Button variant="contained" className='btnlike'><RiShareLine /> Share</Button>
                                <Button variant="contained" className="trailerbtn"><ThumbUpIcon /> Play Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1150px] 2xl:max-w-[1550px] mx-auto'>
                <h1>Story Line</h1>
                <p>Guardians of the Galaxy Vol. 3 (stylized as Guardians of the Galaxy Volume 3) is a 2023 American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures. It is the final installment in the Guardians of the Galaxy film trilogy, the sequel to Guardians of the Galaxy (2014) and Guardians of the Galaxy Vol. 2 (2017), and the 32nd film in the Marvel Cinematic Universe (MCU). It was written and directed by James Gunn, and features an ensemble cast including... <span className='text-[#D71134]'>More</span></p>

            </div>
            <TopCost/>
            <TabComponent  tabs={["Episode ","More Like This","Trailers & More"]} episod={imageseries}/>
            <Movies data={watchList} title="Your Watchlist" live={false}/>
            <Footer />
        </>
    )
}

export default Series