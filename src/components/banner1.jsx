import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import imgslider from "@/assets/Poster.png";
import logo from "@/assets/logo.png";
import { style } from "@/assets/style.jsx";

const Banner = ({ title, subheading }) => {
  return (
    <>
      <Box
        className="min-h-[50vh] relative bg-no-repeat bg-cover w-full h-full bg-center"
        sx={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 4%, rgba(0,0,0,0) 81%), url(${imgslider.src})`,
        }}
      >
        <Box sx={{ pt: "40px" }}>
          <img className="m-auto" src={logo.src} alt="logo" />

          <Grid container gap={5} sx={{ justifyContent: "center" }}>
            <Grid item xs={11} sm={6} md={4}>
              <Typography
                sx={{ mt: "20px", ...style.Heading1 }}
                variant="h4"
                component="h4"
              >
                {title}
              </Typography>
              <Typography
                sx={{ mt: "20px" }}
                variant="subtitle2"
                component="span"
              >
                {subheading}
              </Typography>
            </Grid>
            <Grid item xs={11} sm={6} md={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Banner;