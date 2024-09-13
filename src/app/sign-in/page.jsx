import React from 'react'
import accounts_logo from "@/assets/info.svg"
import sc1_icon from "@/assets/sc1.svg"
import sc2_icon from "@/assets/sc2.svg"
import sc3_icon from "@/assets/sc3.svg"
import Link from 'next/link'
import { Button } from '@mui/material'



const Signin = () => {
  return (
    <section className="accounts_section">
      <div className="accounts_inner_main">
        <div className="accounts_logo">
        <img src={accounts_logo.src} alt="" />
        </div>
        <div className="accounts_card_body_div">
          <div className="accounts_input">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' />
          </div>
          <div className="accounts_input">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' />
          </div>
          <div className='forgot_pass'>
          <Link href="#">Forgot Password</Link>
          </div>
          <div className="accounts_btn">
            <Button variant="contained" className="trailerbtn">Login</Button>
            <Button variant="outlined" color="inherit" className="btnadd">Back</Button>
          </div>
          <div className="accounts_last_txt">
            <p>Don’t have an account? <Link href="#">Sign up</Link></p>
          </div>
        </div>
        <div className="accounts_social_icons">
        <img src={sc1_icon.src} alt="" />
        <img src={sc2_icon.src} alt="" />
        <img src={sc3_icon.src} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Signin