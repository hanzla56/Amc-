import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Breadcrumbs } from "@mui/material";
import FacebookIcon from "@/assets/Facebook.png";
import InstagramIcon from "@/assets/Instagram.png";
import GoogleIcon from "@/assets/Google.png";
import TwitterIcon from "@/assets/Twitter.png";
import { PiInstagramLogo } from "react-icons/pi";
import Link from "next/link";


const Footer = () => {

    return (
        <>
            <footer className="border-t border-[#FFFFFF1A] mange_container">
                <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 pt-10">
                        <h1 className="sm:text-[40px] md:text-[40px] md:leading-[48px] font-semibold max-w-[500px]">
                            Our platform is trusted by millions & features best updated movies all around the world.
                        </h1>
                        <div className="flex flex-col justify-between">
                        <div className="flex items-center sm:justify-end gap-4 h-fit footer_links">
                            <Link className="text-white h-fit" href="/">Home</Link>/
                            <Link className="text-white h-fit" href="/discover">Discover</Link>/
                            <Link className="text-white h-fit" href="/amc-kids">AMC Kids</Link>/
                            <Link className="text-white h-fit" href="/Influence">Influence</Link>/
                            <Link className="text-white h-fit" href="/espanol">Español</Link>
                        </div>
                        <div className="flex itmes-center gap-5 justify-end">
                            <Link href="/"><img src={InstagramIcon.src} alt="" /></Link>
                            <Link href="/"><img src={FacebookIcon.src} alt="" /></Link>
                            <Link href="/"><img src={TwitterIcon.src} alt="" /></Link>
                            <Link href="/"><img src={GoogleIcon.src} alt="" /></Link>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between pb-5 text-[#FFFFFF] text-[14px] mt-5">
                        <div className="flex itmes-center mt-1 gap-5">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Language</p>
                        </div>
                            <p>@2024</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
