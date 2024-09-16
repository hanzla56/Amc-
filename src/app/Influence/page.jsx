"use client";


import React, { useState } from 'react';
import imginf from "@/assets/inf.png";
import logo from "@/assets/logo.png";
import pop1_img from "@/assets/pop1.svg";
import pop2_img from "@/assets/pop2.svg";
import pop3_img from "@/assets/pop3.svg";
import pop4_img from "@/assets/pop4.svg";
import male_img from "@/assets/male.svg";
import male2_img from "@/assets/male2.svg";
import video_img from "@/assets/video_icon.svg";
import edit_img from "@/assets/edit.svg";
import badge_img from "@/assets/badge.svg";
// import { Button } from '@nextui-org/react'
import Link from 'next/link';
import Reels from '@/components/Reels';
import HotMovieTopics from '@/components/HotMovieTopics';
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { Button } from '@mui/material';
import Footer from '@/components/Footer';
import { eventdata } from '@/assets/data';
import { LuUpload } from "react-icons/lu";


const Influence = () => {

    const [showMore, setShowMore] = useState(
        null
    );



    return (
        <>
            <section className='flex min-h-[514px] relative' style={{ backgroundImage: `linear-gradient(358.93deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.57) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #0D0C0F 103.18%),url(${imginf.src})` }}>

                <div className="absolute bottom-10 2xl:bottom-20 left-0 mx-auto right-0 z-10 max-w-[1150px] 2xl:max-w-[1550px]">
                    <h1 className="text-[56px] font-bold mt-2 max-w-[730px] leading-[64px]">Become A Movie Influencer</h1>
                    <p className="2xl:text-[16px] text-[14px] my-3">
                        Share your reels and thoughts about movies to people and become an influencer!
                    </p>
                </div>

                <div className="fixed top-5 left-0 right-0 z-50 w-full max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <img src={logo.src} alt="logo" />
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href="/">Home</Link>
                            <Link href="/discover">Discover</Link>
                            <Link href="/">AMC Kids</Link>
                            <Link href="/influence">Influence</Link>
                            <Link href="/">Español</Link>
                        </div>

                    </div>
                </div>
            </section>

            <div>
                <Reels title="🔥 Hot Featured Reels" />
                <HotMovieTopics />
            </div>


            <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto" style={{ padding: "0px 25px" }}>
                <div className="popular_dis_main">
                    <div className="popular_dis_left_main">
                        <h1 className="pop_title">⭐ Popular Discussion</h1>
                        <div className="popular_dis_input_main">
                            <img src={male_img.src} className='male_img' alt="..." />
                            <div className="popular_dis_input_div">
                                <input type="text" placeholder='Add Discussion title' />
                                <img src={video_img.src} alt="" />
                            </div>
                            <Button variant="contained" className="trailerbtn">Post</Button>
                        </div>
                        <div className="popular_dis_left_card_body">
                            <div className="popular_dis_left_inner1">
                                <div className="popular_dis_left_card_arrows">
                                    <IoArrowUpCircle />
                                    <span>22</span>
                                    <IoArrowDownCircle />
                                </div>
                                <div className="popular_dis_left_card_text_main">
                                    <div className="popular_dis_left_card_text1">
                                        <h2>Do you agree the Spiderman 3 is the worst movie? Why?</h2>
                                        <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na'vi race to protect their planet. ...</p>
                                    </div>
                                    <div className="popular_dis_left_card_text_bottom">
                                        <div className="popular_dis_left_card_bottom_txt1">
                                            <span>@GaranAlbino</span>
                                            <span>.</span>
                                            <span>3 Hours ago</span>
                                        </div>
                                        <div className='popular_dis_left_card_bottom_txt2'>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegHeart />
                                                <span>65</span>
                                            </div>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegCommentDots />
                                                <span>65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_card1_right_img">
                                <img src={pop1_img.src} alt="" />
                            </div>
                        </div>
                        <div className="popular_dis_left_card_body">
                            <div className="popular_dis_left_inner1">
                                <div className="popular_dis_left_card_arrows">
                                    <IoArrowUpCircle />
                                    <span>0</span>
                                    <IoArrowDownCircle />
                                </div>
                                <div className="popular_dis_left_card_text_main">
                                    <div className="popular_dis_left_card_text1">
                                        <h2>Spiderman; Into The Spiderverse second movie?</h2>
                                        <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na'vi race to protect their planet. ...</p>
                                    </div>
                                    <div className="popular_dis_left_card_text_bottom">
                                        <div className="popular_dis_left_card_bottom_txt1">
                                            <span>@GaranAlbino</span>
                                            <span>.</span>
                                            <span>3 Hours ago</span>
                                        </div>
                                        <div className='popular_dis_left_card_bottom_txt2'>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegHeart />
                                                <span>0</span>
                                            </div>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegCommentDots />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_card1_right_img">
                                <img src={pop2_img.src} alt="" />
                            </div>
                        </div>
                        <div className="popular_dis_left_card_body">
                            <div className="popular_dis_left_inner1">
                                <div className="popular_dis_left_card_arrows">
                                    <IoArrowUpCircle />
                                    <span>423</span>
                                    <IoArrowDownCircle />
                                </div>
                                <div className="popular_dis_left_card_text_main">
                                    <div className="popular_dis_left_card_text1">
                                        <h2>Top Gun is propaganda for the Movie World?</h2>
                                        <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na'vi race to protect their planet. ...</p>
                                    </div>
                                    <div className="popular_dis_left_card_text_bottom">
                                        <div className="popular_dis_left_card_bottom_txt1">
                                            <span>@GaranAlbino</span>
                                            <span>.</span>
                                            <span>3 Hours ago</span>
                                        </div>
                                        <div className='popular_dis_left_card_bottom_txt2'>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegHeart />
                                                <span>432</span>
                                            </div>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegCommentDots />
                                                <span>65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_card1_right_img">
                                <img src={pop3_img.src} alt="" />
                            </div>
                        </div>
                        <div className="popular_dis_left_card_body">
                            <div className="popular_dis_left_inner1">
                                <div className="popular_dis_left_card_arrows">
                                    <IoArrowUpCircle />
                                    <span>13</span>
                                    <IoArrowDownCircle />
                                </div>
                                <div className="popular_dis_left_card_text_main">
                                    <div className="popular_dis_left_card_text1">
                                        <h2>Jason Statham injuries in the Mechanic Movie is real?</h2>
                                        <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na'vi race to protect their planet. ...</p>
                                    </div>
                                    <div className="popular_dis_left_card_text_bottom">
                                        <div className="popular_dis_left_card_bottom_txt1">
                                            <span>@GaranAlbino</span>
                                            <span>.</span>
                                            <span>3 Hours ago</span>
                                        </div>
                                        <div className='popular_dis_left_card_bottom_txt2'>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegHeart />
                                                <span>43</span>
                                            </div>
                                            <div className="popular_dis_left_card_bottom_txt2_inner">
                                                <FaRegCommentDots />
                                                <span>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_card1_right_img">
                                <img src={pop4_img.src} alt="" />
                            </div>
                        </div>
                        <div className="show_more_btn">
                            <Button variant="outlined" color="inherit" className="btnadd">Show more</Button>
                        </div>
                    </div>
                    <div className="popular_dis_right_main">
                        <div className="popular_dis_right_card1">
                            <h1>Want to make a movie influence Profile?</h1>
                            <Button variant="contained" className="trailerbtn">Create your profile now</Button>
                        </div>
                        <div className="popular_dis_right_profile_card">
                            <div className="popular_dis_right_profile_title">
                                <h5>Profile</h5>
                                <span><img src={edit_img.src} alt="" /> Edit</span>
                            </div>
                            <div className="profile_card_top1">
                                <div className="profile_card_top1_img">
                                    <img src={male2_img.src} alt="" />
                                </div>
                                <div className="profile_card_top1_txt">
                                    <h2>24</h2>
                                    <p>Followers</p>
                                </div>
                                <div className="profile_card_top1_txt">
                                    <h2>4</h2>
                                    <p>Following</p>
                                </div>
                            </div>
                            <div className="profile_card_discrip">
                                <h2>Irvan Wibowo</h2>
                                <p>Action Movie Expert, I love action films.</p>
                                <img src={badge_img.src} alt="" />
                                <div style={{textAlign:"center"}}>
                                    <Button> <LuUpload /> Upload Video</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_premiere_event_main">
                    <h1 className="pop_title">Movie Premiere Event</h1>
                    <h1 className="movie_title">NOvember</h1>

                    {eventdata.map((item, i) => (
                        <div className="movie_premiere_event_card_body" key={i}>
                            <div className="movie_premiere_event_card_circle">
                                <span>0{i + 1}</span>
                            </div>
                            <div className="movie_premiere_event_card_right">
                                <div className="movie_premiere_event_card_profile">
                                    <img src={item.img.src} alt="" />
                                    <div>
                                        <h1>{item.title}</h1>
                                        <p>Season 1 Episode 3: Part One</p>
                                    </div>
                                </div>
                                {showMore === i && (
                                    <div className="movie_premiere_event_card_txt">
                                        <h3>Star Time</h3>
                                        <p>09:00 AM EST</p>

                                        <h3>Info</h3>
                                        <p>
                                            Originally a story from Archie Comics which started in 1941, Riverdale centres around a group of high school students who are shocked by the death of classmate, Jason Blossom. Together they unravel the secrets of Riverdale and who... <span className='more_txt'>More</span>
                                        </p>

                                        <h3>Rules</h3>
                                        <ul>
                                            <li>Polite</li>
                                            <li>No Swear Words</li>
                                            <li>Be Good... <span className='more_txt'>More</span></li>
                                        </ul>
                                    </div>
                                )}
                                <span className='more_txt' onClick={() => setShowMore(i)}>
                                    {showMore === i ? ' Show Less' : ' Show detail'}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="december_card_main">
                    <h1 className="movie_title">NOvember</h1>
                    <div className="show_more_btn">
                        <Button variant="outlined" color="inherit" className="btnadd">Show more</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Influence