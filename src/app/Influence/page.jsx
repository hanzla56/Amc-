"use client";
import React, { useState } from 'react';
import imginf from "@/assets/Inf.png"; 
import pop1_img from "@/assets/pop1.svg";
import pop2_img from "@/assets/pop2.svg";
import pop3_img from "@/assets/pop3.svg";
import pop4_img from "@/assets/pop4.svg";
import male_img from "@/assets/male.svg";
import male2_img from "@/assets/male2.svg";
import edit_img from "@/assets/edit.svg";
import badge_img from "@/assets/badge.svg";
import Link from 'next/link';
import Reels from '@/components/Reels';
import HotMovieTopics from '@/components/HotMovieTopics';
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { Button } from '@mui/material';
import Footer from '@/components/Footers';
import { eventdata } from '@/assets/data';
import { LuUpload } from "react-icons/lu";
import Navbar from '@/components/Mobile_nav';
import NavBars from '@/components/NavBars';
import { VideoIcons } from '@/assets/Icons';
 
import Image from 'next/image';


const Influence = () => {

    const [showMore, setShowMore] = useState(null);



    return (
        <>
            <section className='flex min-h-[514px] relative' style={{ backgroundImage: `linear-gradient(358.93deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.57) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #0D0C0F 103.18%),url(${imginf.src})` }}>
                <NavBars />
                <Navbar />
                <div className="absolute bottom-10 2xl:bottom-20 left-0 mx-auto right-0 z-10 max-w-[1150px] 2xl:max-w-[1550px]">
                    <h1 className="text-[56px] font-bold mt-2 max-w-[730px] leading-[64px]">Become A Movie Influencer</h1>
                    <p className="2xl:text-[16px] text-[14px] my-3">
                        Share your reels and thoughts about movies to people and become an influencer!
                    </p>
                </div>
            </section>
            <section className="influence_Section">

                <div>
                    <Reels title="🔥 Hot Featured Reels" />
                </div>
                <div className="mange_container">
                    <HotMovieTopics />
                </div>

                <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto mange_container">
                    <div className="popular_dis_main">
                        <div className="popular_dis_left_main">
                            <h1 className="pop_title">⭐ Popular Discussion</h1>
                            <div className="popular_dis_input_main">
                                <Image src={male_img.src} className='male_img' alt="..." width={30} height={150}  />
                                <div className="popular_dis_input_div relative" >
                                    <input type="text" placeholder='Add Discussion title' />
                                    <div className='absolute right-3 top-3 '>
                                        <VideoIcons />
                                    </div>
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
                                            <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na&apos;vi race to protect their planet. ...</p>
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
                                    <Image src={pop1_img.src} alt="" height={150} width={30}/>
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
                                            <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na&apos;vi race to protect their planet. ...</p>

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
                                    <Image src={pop2_img.src} alt="" height={150} width={30} />
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
                                            <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na&apos;vi race to protect their planet. ...</p>
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
                                    <Image src={pop3_img.src} alt="" width={30} height={150} />
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
                                            <p>Ahmad Movi lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na&apos;vi race to protect their planet. ...</p>
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
                                    <Image src={pop4_img.src} alt="" width={30} height={150}  />
                                </div>
                            </div>
                            <div className="show_more_btn">
                                <Button variant="outlined" color="inherit" className="btnadd">Show more</Button>
                            </div>
                        </div>
                        <div className="popular_dis_right_main">
                            <div className="popular_dis_right_card1">
                                <h1>Want to make a movie influence Profile?</h1>
                              <Link href={"profile"}>
                              <Button variant="contained" className="trailerbtn">Create your profile now</Button>
                              </Link>
                            </div>
                            <div className="popular_dis_right_profile_card">
                                <div className="popular_dis_right_profile_title">
                                    <h5>Profile</h5>
                                    <span><Image src={edit_img.src} alt="" width={30} height={150}  /> Edit</span>
                                </div>
                                <div className="profile_card_top1">
                                    <div className="profile_card_top1_img">
                                        <Image src={male2_img.src} alt="" width={30} height={150}  />
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
                                    <Image src={badge_img.src} alt="" width={30} height={150} />
                                    <div style={{ textAlign: "center" }}>
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
                                        <Image src={item.img.src} alt="" width={30} height={150} />
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
                            <Link href="/discussion"><Button variant="outlined" color="inherit" className="btnadd">Show more</Button></Link>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

export default Influence