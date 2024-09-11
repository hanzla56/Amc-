import { Box, Modal, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import CorrectIcon from "@/assets/RedCheckBox.png";
import logo from "@/assets/logo.png";
import { style } from "@/assets/style.jsx";

const EmailVerification = ({ open, setOpen }) => {
    return (
        
        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backgroundColor: "#000000de", overflowY: "auto"}}
        >
            <Box sx={{ width: { xs: '100%', sm: '600px' }, ...style.modal}}>
                <Box>
                    <img className="m-auto" src={logo.src} alt="logo" />
                </Box>
                <Box sx={{textAlign:'center', ...style.modal_fields}} className="mt-5 login_signup_form">

                    <img className='m-auto' src={CorrectIcon.src} alt="CorrectIcon" />
                    <Typography variant="h4" component="h4" sx={{ m: "15px" }}>
                        Great, now let’s verify your email
                    </Typography>
                    <Typography sx={{mb:'15px'}} variant="body1" component="div" >
                        Click the link we sent to irvanwi*******@email.com
                    </Typography>
                    <Typography sx={{mb:'15px'}} variant="body1" component="div" >
                        Verifying your email will improve account security and help you receive important AMC Streams communications.
                    </Typography>

                    <Box>
                        <Button  sx={{width:'100%', mb:'20px'}} variant={'outlined'} color={'inherit'} size='large'>Skip</Button>

                    </Box>
                </Box>

            </Box>
        </Modal>
        
    )
}

export default EmailVerification