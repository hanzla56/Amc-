import { Box, Button, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, Modal, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import facebook_logo from "@/assets/facebook_logo.png";
import insta_logo from "@/assets/Instagram_icon.png";
import tiktok_logo from "@/assets/Tiktok_icon.png";
import logo from "@/assets/logo.png";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { style } from "@/assets/style.jsx";

const Signup = ({ open, setOpen }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [plan, setPlan] = useState(false);
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

                    <InputLabel sx={{color: '#fff', mb:'10px' }}>Username</InputLabel>
                    <TextField placeholder='Username' sx={{backgroundColor: '#fff', borderRadius:'8px', width: '100%', mb:'20px'}} type='email' size='large' variant={'outlined'} />

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
                        />
                    </FormControl>
                    <InputLabel sx={{color: '#fff', mb:'10px'}}>Confirm Password</InputLabel>
                    <FormControl sx={{ width: '100%', backgroundColor: '#fff', borderRadius:'8px', mb:'20px' }} variant="outlined" size='large'>
                        <OutlinedInput
                            id="outlined-adornment-confirm-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Confirm Password'
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
                        />
                    </FormControl>
                    <br />
                    <Box >
                    
                    <FormControlLabel
                            value=""
                            control={ <Checkbox
                                defaultChecked
                                sx={{
                                  color: '#D71134',
                                  '&.Mui-checked': {
                                    color: '#D71134',
                                    textAlign:'left'
                                  },
                                }}
                              />}
                            label="I agree to our Privacy Policy and Term & Conditions"
                            labelPlacement="I agree to our Privacy Policy and Term & Conditions"
                        />
                        <Button  sx={{width:'100%', mb:'20px'}} variant={'contained'} color={'error'}  size='large' >Continue</Button> <br />
                        <Button  sx={{width:'100%', mb:'20px'}} variant={'outlined'} color={'inherit'} size='large'>Back</Button> <br />
                        <Box sx={{textAlign:'center'}}>
                        Already have an account? <span>  <Link sx={{ color:'white'}} href="#">Login</Link> </span>
                        </Box>
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

export default Signup