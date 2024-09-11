import React from "react";
import { Box, Button, Typography } from "@mui/material";
import imgslider from "@/assets/Poster.png";
import logo from "@/assets/logo.png";
import badges from "@/assets/badges2.png";
import Grid from "@mui/material/Grid";
import { style } from "@/assets/style.jsx";
import Banner1 from "@/components/banner1";

const BecomeInfluencer = () => {
  return (
    <>
      <Banner1
        title="Become A Movie Influencer" 
        subheading="Join and Share your reels and thoughts!"
      />

      <Box>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={11} md={8}>
            <Box sx={{ p: "30px", ...style.box }} className="mt-5">
              <Typography
                sx={{ ...style.Heading1 }}
                variant="h4"
                component="h4"
              >
                Share Your Reel, Earn Your Badge: Become a Cinema Influencer
              </Typography>
              <img className="m-auto" src={badges.src} alt="badges" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container gap={5} sx={{ justifyContent: "center", mt: "20px" }}>
          <Grid item xs={12} sm={5}>
            <Button
              sx={{ width: "100%", mb: "20px" }}
              variant={"contained"}
              color={"error"}
              size="large"
            >
              Continue
            </Button>
            <Button
              sx={{ width: "100%", mb: "20px" }}
              variant={"outlined"}
              color={"inherit"}
              size="large"
            >
              Skip
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BecomeInfluencer;
