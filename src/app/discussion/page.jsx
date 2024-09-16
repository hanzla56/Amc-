import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import pop1_img from "@/assets/pop1.svg";
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";
import { Button } from '@mui/material';
import Footer from '@/components/Footer';
import male_img from "@/assets/male.svg";
import video_img from "@/assets/video_icon.svg"; 


const page = () => {
    return (
        <>
            <section className="discussion_section">
                <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto" style={{ padding: "0px 25px" }}>
                    <div style={{ paddingTop: "50px" }}>
                        <Button variant="outlined" color="inherit" className="btnadd">Back</Button>
                    </div>
                    <div className="popular_dis_left_card_body card_active">
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
                    <div className="popular_dis_left_comments">
                        <h1 className="comments_title">20 Comments</h1>
                        <div className="popular_dis_left_inner1">
                            <div className="popular_dis_left_card_arrows">
                                <IoArrowUpCircle />
                                <span>22</span>
                                <IoArrowDownCircle />
                            </div>
                            <div className="popular_dis_left_card_text_main">
                                <div className="popular_dis_left_card_text1">
                                    <h2>I think with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish. Jake must work with Neytiri and the army of the Na'vi race to protect their planet...Jake must work with Neytiri and the army of the Na'vi race to protect their planet. ...</h2>
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
                                        <span>.</span>
                                        <div className="popular_dis_left_card_bottom_txt2_inner">
                                            <span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular_dis_left_inner1">
                            <div className="popular_dis_left_card_arrows">
                                <IoArrowUpCircle />
                                <span>22</span>
                                <IoArrowDownCircle />
                            </div>
                            <div className="popular_dis_left_card_text_main">
                                <div className="popular_dis_left_card_text1">
                                    <h2>And Jake must work with Neytiri and the army of the Na'vi race to protect their planet</h2>
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
                                        <span>.</span>
                                        <div className="popular_dis_left_card_bottom_txt2_inner">
                                            <span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular_dis_left_inner1">
                            <div className="popular_dis_left_card_arrows">
                                <IoArrowUpCircle />
                                <span>22</span>
                                <IoArrowDownCircle />
                            </div>
                            <div className="popular_dis_left_card_text_main">
                                <div className="popular_dis_left_card_text1">
                                    <h2>Love it</h2>
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
                                        <span>.</span>
                                        <div className="popular_dis_left_card_bottom_txt2_inner">
                                            <span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular_dis_left_inner1">
                            <div className="popular_dis_left_card_arrows">
                                <IoArrowUpCircle />
                                <span>22</span>
                                <IoArrowDownCircle />
                            </div>
                            <div className="popular_dis_left_card_text_main">
                                <div className="popular_dis_left_card_text1">
                                    <h2>Really like the movie</h2>
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
                                        <span>.</span>
                                        <div className="popular_dis_left_card_bottom_txt2_inner">
                                            <span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_dis_input_main">
                            <img src={male_img.src} className='male_img' alt="..." />
                            <div className="popular_dis_input_div">
                                <input type="text" placeholder='Add Discussion title' />
                                <img src={video_img.src} alt="" />
                            </div>
                            <Button variant="contained" className="trailerbtn">Post</Button>
                        </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page