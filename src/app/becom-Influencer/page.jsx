import React from 'react'
import influi_top from "@/assets/influ1.svg"
import logo from "@/assets/logo.png"
import badges from "@/assets/badges2.png"
import Link from 'next/link'
import { Button } from '@mui/material'



const Influencer = () => {
  return (
    <section className="influence_section">
      <div className="influ_top_img">
        <img src={influi_top.src} className='influ_main_img' alt="" />
        <div className="overlay"></div>
        <div className="overlay_text_main">
          <div className="over_logo">
            <img src={logo.src} alt="" />
          </div>
          <div className="overlay_text">
            <h1>Become A Movie <br /> Influencer</h1>
            <p>Join and Share your reels and thoughts!</p>
          </div>
        </div>
      </div>
      <div className="mange_container">
        <div className="influence_bottom_card">
          <div className="influence_bottom_text">
            <h1>Share Your Reel, Earn Your Badge: Become a Cinema Influencer</h1>
            <div className="influence_bottom_img">
              <img src={badges.src} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[400px] mx-auto py-10 flex flex-col gap-5">
          <Link href="/Influence"><Button variant="contained" className="trailerbtn w-full p-2">Continue</Button></Link>
          <Button variant="outlined" color="inherit" className="btnadd w-full p-2">Skip</Button>
        </div>
      </div>
    </section>
  )
}

export default Influencer