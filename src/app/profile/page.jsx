import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { style } from "@/assets/style.jsx";
import AvatarIcon from "@/assets/Avatar.png";
import Footer from "@/components/footer";

const profile = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            sx={{ justifyContent: "space-between", pt: "50px" }}
          >
            <Grid item xs="auto">
              <Typography variant="h6" component="h6">
                Create Profile
              </Typography>
            </Grid>
            <Grid item xs="auto"></Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container sx={{ justifyContent: "center", mt: "20px" }}>
            <Grid item xs={12} sm={8} md={6}>
                <Box sx={{textAlign:'center'}}>
                    <InputLabel sx={{ color: "#fff", mb: "20px" }}>
                        Upload Logo
                    </InputLabel>
                    <img className="m-auto" src={AvatarIcon.src} alt="" />
                </Box>
              <Box className="mt-5">
                <InputLabel sx={{ color: "#fff", mb: "20px" }}>
                  Email
                </InputLabel>
                <TextField
                  placeholder="Irvan Wibowo"
                  sx={style.transparent_input}
                  type="text"
                  size="medium"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "#FFFFFF" }, // Ensures white color for the placeholder text
                  }}
                  inputProps={{
                    style: { color: "#FFFFFF" }, // Ensures white text color for the input
                  }}
                />
                <InputLabel sx={{ color: "#fff", mb: "20px" }}>
                  Descriptions
                </InputLabel>
                <TextField
                  placeholder="Action Movie Expert, I love action films."
                  sx={style.transparent_input}
                  type="text"
                  size="medium"
                  variant="outlined"
                  multiline // Enables textarea
                  rows={3} // Sets the number of visible rows
                  InputLabelProps={{
                    style: { color: "#FFFFFF" }, // Ensures white color for the placeholder text
                  }}
                  inputProps={{
                    style: { color: "#FFFFFF" }, // Ensures white text color for the input
                  }}
                />
                <InputLabel sx={{ color: "#fff", mb: "20px" }}>
                  Social Media Automation
                </InputLabel>
                <Grid container sx={{ mb: "20px" }}>
                  <Grid item xs>
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
                            label="Facebook"
                            labelPlacement="end"
                        />
                  </Grid>
                  <Grid item xs>
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
                            label="Instagram"
                            labelPlacement="end"
                        />
                  </Grid>
                  <Grid item xs>
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
                            label="Tiktok"
                            labelPlacement="end"
                        />
                  </Grid>
                </Grid>
                <Box sx={{textAlign:'center'}}>
                    <Button  sx={{width:'40%', mb:'20px'}} variant={'contained'} color={'error'}  size='large' >Continue</Button> <br />
                </Box>
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default profile;
