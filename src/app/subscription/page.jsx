import React from 'react'
import logo from "@/assets/logo.png"
import { Button } from '@mui/material'

const subscription = () => {
  return (
    <section className="subscription_section">
      <div className="subscription_inner">
        <div className="subs_logo">
          <img src={logo.src} alt="" />
        </div>
        <div className="subs_title">
          <h3>Choose the plan that’s right for you</h3>
        </div>
        <div className="subscription_cards_main">
          <div className="subscription_card_body">
            <div className="subscription_card_text1">
              <p>30 Days</p>
              <p>Standard with ads</p>
              <p>720p/1080p/4K</p>
            </div>
            <div className="subscription_card_text2">
              <p>$8.99</p>
              <div className="subscription_border"></div>
              <p>Video and Sound Quality</p>
              <p>VOD/Live</p>
              <div className="subscription_border"></div>
              <p>Resolution</p>
              <p>1080p (Full HD)</p>
              <div className="subscription_border"></div>
              <p>Devices your household can watch at
                the same time</p>
              <p>2</p>
              <div className="subscription_border"></div>
              <p>Ads</p>
              <p>Less than might think</p>
              <div className="subscription_border"></div>
              <p>Supported Devices</p>
              <p>TV, computer, mobile phone, tablet</p>
              <div className="subscription_border"></div>
            </div>
          </div>
          <div className="subscription_card_body">
            <div className="subscription_card_text1">
              <p>180 Days</p>
              <p>Standard</p>
              <p>720p/1080p/4K</p>
            </div>
            <div className="subscription_card_text2">
              <p>$49.99</p>
              <div className="subscription_border"></div>
              <p>Video and Sound Quality</p>
              <p>VOD/Live</p>
              <div className="subscription_border"></div>
              <p>Resolution</p>
              <p>1080p (Full HD)</p>
              <div className="subscription_border"></div>
              <p>Devices your household can watch at
                the same time</p>
              <p>2</p>
              <div className="subscription_border"></div>
              <p>Ads</p>
              <p>No Ads</p>
              <div className="subscription_border"></div>
              <p>Supported Devices</p>
              <p>TV, computer, mobile phone, tablet</p>
              <div className="subscription_border"></div>
            </div>
          </div>
          <div className="subscription_card_body">
            <div className="subscription_card_text1">
              <p>360 Days</p>
              <p>Premium</p>
              <p>720p/1080p/4K</p>
            </div>
            <div className="subscription_card_text2">
              <p>$79.99</p>
              <div className="subscription_border"></div>
              <p>Video and Sound Quality</p>
              <p>VOD/Live</p>
              <div className="subscription_border"></div>
              <p>Resolution</p>
              <p>4K (Ultra Wide) + HDR</p>
              <div className="subscription_border"></div>
              <p>Devices your household can watch at
                the same time</p>
              <p>4</p>
              <div className="subscription_border"></div>
              <p>Ads</p>
              <p>No Ads</p>
              <div className="subscription_border"></div>
              <p>Supported Devices</p>
              <p>TV, computer, mobile phone, tablet</p>
              <div className="subscription_border"></div>
            </div>
          </div>
        </div>
        <div className="subscrip_bottom_button">
          <Button variant="contained" className="trailerbtn">Continue</Button>
        </div>
      </div>
    </section>
  )
}

export default subscription