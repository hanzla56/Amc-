import React from 'react'
import { Button } from '@mui/material'
import logo from "@/assets/logo.png"
import check_img from "@/assets/check.svg"

const page = () => {
    return (
        <section className="email_verfi_section">
            <div className="email_veri_inner">
                <div className="subs_logo">
                    <img src={logo.src} alt="" />
                </div>
                <div className="email_veri_card_body_div">
                    <img src={check_img.src} alt="" />
                    <h1>Great, now let’s verify your email</h1>
                    <span>Click the link we sent to irvanwi*******@email.com</span>
                    <p>Verifying your email will improve account security and help you receive important AMC Streams communications.</p>
                    <Button variant="outlined" color="inherit" className="btnadd">Skip</Button>
                </div>
            </div>
        </section>
    )
}

export default page 