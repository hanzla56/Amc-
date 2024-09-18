import React from 'react'
import Link from "next/link";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";

const Web_nav = () => {
    return (
        <section className="webnav_section web_nav">
            <div className="fixed top-5 left-0 right-0 z-50 w-full max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <img src={logo.src} alt="logo" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="/">Home</Link>
                        <Link href="/discover">Discover</Link>
                        <Link href="/">AMC Kids</Link>
                        <Link href="/becom-Influencer">Influence</Link>
                        <Link href="/">Español</Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="/sign-up">
                            <Button variant="outlined" color="inherit" className="btnadd">
                                Sign up
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button

                                variant="contained"
                                className="trailerbtn">
                                Login
                            </Button></Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Web_nav