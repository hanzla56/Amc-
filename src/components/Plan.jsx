import {
  Box,
  Modal,
  Typography,
  Button,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { style } from "@/assets/style.jsx";

const Plan = ({ open, setOpen }) => {

    const [selectedValue, setSelectedValue] = useState(null);

    const handleCheckboxChange = (value) => {
      setSelectedValue(value);
    };
  


  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backgroundColor: "#000000de", overflowY: "auto" }}
    >
      <Box sx={{ width: { xs: "90%" }, ...style.modal }}>
        <Box>
          <img className="m-auto" src={logo.src} alt="logo" />
          <Typography variant="h4" component="h4" sx={{ m: "45px" }}>
            Choose the plan that’s right for you
          </Typography>
        </Box>

        <Grid container gap={5} sx={{ mb: "100px" }}>
          <Grid item xs={12} sm>
            <Box sx={style.modal_fields}>
              <Box
                sx={{ mb: "20px", textAlign: "center", border: '1px solid #28262D', borderRadius: '24px', padding: '20px' }}
              >
                <FormControlLabel
                  value="plan"
                  control={
                    <Checkbox
                        checked={selectedValue === 'option1'}
                        onChange={() => handleCheckboxChange('option1')}
                        defaultChecked
                        sx={{
                            color: "#D71134",
                            "&.Mui-checked": {
                            color: "#D71134",
                            textAlign: "left",
                            },
                        }}
                    />
                  }
                  label={
                    <>
                      <Typography variant="h6" component="h6">
                        30 Days <br />
                        Standard with ads <br />
                        720p/1080p/4K
                      </Typography>
                    </>
                  }
                  labelPlacement="start"
                />
              </Box>

              <Typography variant="h6" component="h6">
                $8.99
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Video and Sound Quality
              </Typography>
              <Typography variant="h6" component="h6">
                VOD/Live
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Resolution
              </Typography>
              <Typography variant="h6" component="h6">
                1080p
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices your household can watch at the same time
              </Typography>
              <Typography variant="h6" component="h6">
                2
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Ads
              </Typography>
              <Typography variant="h6" component="h6">
                Less than might think
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices
              </Typography>
              <Typography variant="h6" component="h6">
                TV, computer, mobile phone, tablet
              </Typography>
              <hr />
            </Box>
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={style.modal_fields}>
              <Box
                sx={{ mb: "20px", textAlign: "center", border: '1px solid #28262D', borderRadius: '24px', padding: '20px' }}
              >
                <FormControlLabel
                  value="plan"
                  control={
                    <Checkbox
                        checked={selectedValue === 'option2'}
                        onChange={() => handleCheckboxChange('option2')}
                        defaultChecked
                        sx={{
                            color: "#D71134",
                            "&.Mui-checked": {
                            color: "#D71134",
                            textAlign: "left",
                            },
                        }}
                    />
                  }
                  label={
                    <>
                      <Typography variant="h6" component="h6">
                        180 Days <br />
                        Standard with ads <br />
                        720p/1080p/4K
                      </Typography>
                    </>
                  }
                  labelPlacement="start"
                />
              </Box>

              <Typography variant="h6" component="h6">
                $49.99
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Video and Sound Quality
              </Typography>
              <Typography variant="h6" component="h6">
                VOD/Live
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Resolution
              </Typography>
              <Typography variant="h6" component="h6">
                1080p
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices your household can watch at the same time
              </Typography>
              <Typography variant="h6" component="h6">
                2
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Ads
              </Typography>
              <Typography variant="h6" component="h6">
                No Ads
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices
              </Typography>
              <Typography variant="h6" component="h6">
                TV, computer, mobile phone, tablet
              </Typography>
              <hr />
            </Box>
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={style.modal_fields}>
              <Box
                sx={{ mb: "20px", textAlign: "center", border: '1px solid #28262D', borderRadius: '24px', padding: '20px' }}
              >
                <FormControlLabel
                  value="plan"
                  control={
                    <Checkbox
                        checked={selectedValue === 'option3'}
                        onChange={() => handleCheckboxChange('option3')}
                        defaultChecked
                        sx={{
                            color: "#D71134",
                            "&.Mui-checked": {
                            color: "#D71134",
                            textAlign: "left",
                            },
                        }}
                    />
                  }
                  label={
                    <>
                      <Typography variant="h6" component="h6">
                        360 Days <br />
                        Standard with ads <br />
                        720p/1080p/4K
                      </Typography>
                    </>
                  }
                  labelPlacement="start"
                />
              </Box>

              <Typography variant="h6" component="h6">
                $79.99
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Video and Sound Quality
              </Typography>
              <Typography variant="h6" component="h6">
                VOD/Live
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Resolution
              </Typography>
              <Typography variant="h6" component="h6">
                4K (Ultra Wide) + HDR
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices your household can watch at the same time
              </Typography>
              <Typography variant="h6" component="h6">
                4
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Ads
              </Typography>
              <Typography variant="h6" component="h6">
              No Ads
              </Typography>
              <hr />
              <Typography variant="h6" component="h6">
                Devices
              </Typography>
              <Typography variant="h6" component="h6">
                TV, computer, mobile phone, tablet
              </Typography>
              <hr />
            </Box>
          </Grid>
        </Grid>
        <Box>
            <Grid container gap={5} sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={5}>
                    <Button
                        sx={{ width: "100%", mb: "20px" }}
                        variant={"contained"}
                        color={"error"}
                        size="large"
                    >
                        Continue
                    </Button>

                </Grid>
            </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default Plan;
