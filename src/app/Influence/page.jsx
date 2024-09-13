import React from 'react'
import imginf from "@/assets/inf.png"
import logo from "@/assets/logo.png"
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import Reels from '@/components/Reels'
import HotMovieTopics from '@/components/HotMovieTopics'


const Influence = () => {

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
                <Reels title="🔥 Hot Featured Reels"/>
                <HotMovieTopics />
            </div>
            <div>

            </div>
        </>
    )
}

export default Influence