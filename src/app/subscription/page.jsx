"use client"
import React, { useState } from 'react'
import logo from "@/assets/logo.png"
import { Button, Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 50,
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    ...theme.applyStyles('dark', {
      backgroundColor: '#30404d',
    }),
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)',
    }),
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '#394b59',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  borderRadius: 50,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});



const subscription = () => {



  return (
    <section className="subscription_section py-10">
      <div className="w-full max-w-[1100px] mx-auto px-5">
        <div className="subs_logo">
          <img src={logo.src} alt="" />
        </div>
        <div className="subs_title">
          <h3>Choose the plan that’s right for you</h3>
        </div>
        <div className="grid lg:grid-cols-3 my-10 gap-10 ">
          <div className="subscription_card_body">
            <div className='flex items-center gap-5'>
              <div className="subscription_card_text1 w-full relative">
                <p>30 Days</p>
                <p>Standard with ads </p>
                <p>720p/1080p/4K</p>
                <div className='absolute right-2 top-[28px]'>
                  {/* <Checkbox
                    sx={{ '&:hover': { bgcolor: 'transparent' } }}
                    // disableRipple
                    color="default"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                    inputProps={{ 'aria-label': 'Checkbox demo' }}
                   
                  /> */}
                </div>
              </div>

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