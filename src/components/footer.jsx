import React from "react";
import Grid from "@mui/material/Grid";
import {Typography,Breadcrumbs,Link,} from "@mui/material";
import FacebookIcon from "@/assets/Facebook.png";
import InstagramIcon from "@/assets/Instagram.png";
import GoogleIcon from "@/assets/Google.png";
import TwitterIcon from "@/assets/Twitter.png";

const Footer = () => {
  
  return (
    <>
     <footer className="border-t border-[#FFFFFF1A]">
     <div className="max-w-[1150px] 2xl:max-w-[1550px] mx-auto">
        <Grid container sx={{ justifyContent: "space-between", pt: "50px" }}>
          <Grid item sm={12} md={4}>
            <Typography variant="h6" component="h6">
            Our platform is trusted by millions & features best updated movies all around the world.
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={7}
            sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#FFFFFF" }}>
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/discover">
                Discover
              </Link>
              <Link underline="hover" color="inherit" href="/amc-kids">
                AMC Kids
              </Link>
              <Link underline="hover" color="inherit" href="/influence">
                Influence
              </Link>
              <Link underline="hover" color="inherit" href="/espanol">
                Español
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "space-between", alignItems: 'center', p: '20px 0px' }}>
          <Grid item sm={12} md={6}>
            <Grid container spacing={2} sx={{ justifyContent: "left" }}>
              <Grid item>
                <Typography variant="body2">Privacy Policy</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Terms of Service</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Language</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container spacing={2} sx={{ justifyContent: "right" }}>
              <Grid item>
                <Link><img src={InstagramIcon.src} alt="" /></Link>
              </Grid>
              <Grid item>
                <Link><img src={FacebookIcon.src} alt="" /></Link>
              </Grid>
              <Grid item>
                <Link><img src={TwitterIcon.src} alt="" /></Link>

              </Grid>
              <Grid item>
                <Link><img src={GoogleIcon.src} alt="" /></Link>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
     </footer>
    </>
  );
};

export default Footer;
