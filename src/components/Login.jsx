import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, Modal, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import facebook_logo from "@/assets/facebook_logo.png";
import insta_logo from "@/assets/Instagram_icon.png";
import tiktok_logo from "@/assets/Tiktok_icon.png";
import logo from "@/assets/logo.png";
import { style } from "@/assets/style.jsx";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Login = ({ open, setOpen }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        
        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backgroundColor: "#000000de"}}
        >
            <Box sx={style.modal} >
                <Box>
                    <img className="m-auto" src={logo.src} alt="logo" />
                </Box>
                <Box sx={style.modal_fields} className="mt-5 login_signup_form">

                    <InputLabel sx={{color: '#fff', mb:'10px' }}>Email</InputLabel>
                    <TextField placeholder='Email' sx={{backgroundColor: '#fff', borderRadius:'8px', width: '100%', mb:'20px'}} type='email' size='large' variant={'outlined'} />
                    
                    <InputLabel sx={{color: '#fff', mb:'10px'}}>Password</InputLabel>
                    <FormControl sx={{ width: '100%', backgroundColor: '#fff', borderRadius:'8px', mb:'20px' }} variant="outlined" size='large'>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    // onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            // label="Password"
                        />
                    </FormControl>
                    <br />
                    <Box sx={{textAlign:'center'}}>
                       <Box sx={{textAlign:"center", mb:'20px'}}>
                            <Link sx={{ color:'white'}} href="/">Forgot password</Link>
                       </Box>
                        <Button  sx={{width:'100%', mb:'20px'}} variant={'contained'} color={'error'}  size='large' >Login</Button> <br />
                        <Button  sx={{width:'100%', mb:'20px'}} variant={'outlined'} color={'inherit'} size='large'>Back</Button> <br />
                        Don’t have an account? <span>  <Link sx={{ color:'white'}} href="#">Sign up</Link> </span>
                    </Box>


                </Box>
                <Box className="flex justify-center gap-6 mt-7">
                    <Link href="/"><img src={facebook_logo.src} alt="Facebook"  /></Link>
                    <Link href="/"><img src={insta_logo.src} alt="Instagram"  /></Link>
                    <Link href="/"><img src={tiktok_logo.src} alt="TikTok"  /></Link>
                </Box>

            </Box>
        </Modal>
        
    )
}

export default Login