import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Breadcrumbs, Link, } from "@mui/material";
import FacebookIcon from "@/assets/Facebook.png";
import InstagramIcon from "@/assets/Instagram.png";
import GoogleIcon from "@/assets/Google.png";
import TwitterIcon from "@/assets/Twitter.png";
import { PiInstagramLogo } from "react-icons/pi";


const Footer = () => {

    return (
        <>
            <footer className="border-t border-[#FFFFFF1A] mange_container">
                <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 pt-10">
                        <h1 className="sm:text-[40px] md:text-[40px] md:leading-[48px] font-semibold max-w-[500px]">
                            Our platform is trusted by millions & features best updated movies all around the world.
                        </h1>
                        <div className="flex items-center sm:justify-end gap-4 h-fit footer_links">
                            <Link underline="hover" className="text-white h-fit" href="/">Home</Link>/
                            <Link underline="hover" className="text-white h-fit" href="/discover">Discover</Link>/
                            <Link underline="hover" className="text-white h-fit" href="/amc-kids">AMC Kids</Link>/
                            <Link underline="hover" className="text-white h-fit" href="/influence">Influence</Link>/
                            <Link underline="hover" className="text-white h-fit" href="/espanol">Español</Link>
                        </div>
                    </div>

                    <Grid container sx={{ justifyContent: "space-between", alignItems: 'center', p: '20px 0px' ,gap:'15px'}}>
                        <Grid item sm={12} md={6}>
                            <Grid container spacing={2} sx={{ justifyContent: "left" }}>
                                <Grid item>
                                    <Typography variant="body2">Privacy Policy</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">Terms of Service</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">Language</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Grid container spacing={2} sx={{ justifyContent: "right" }}>
                                <Grid item>
                                    <Link><img src={InstagramIcon.src} alt="" /></Link>
                                </Grid>
                                <Grid item>
                                    <Link><img src={FacebookIcon.src} alt="" /></Link>
                                </Grid>
                                <Grid item>
                                    <Link><img src={TwitterIcon.src} alt="" /></Link>

                                </Grid>
                                <Grid item>
                                    <Link><img src={GoogleIcon.src} alt="" /></Link>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        </>
    );
};

export default Footer;
