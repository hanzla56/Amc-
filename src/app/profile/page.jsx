"use client"
import React,{useState} from "react";
import Footer from "@/components/Footers";
import Button from '@mui/material/Button'
import avatar from "@/assets/Avatar.png"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';  


const profile = () => {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
      setSelectedValue(event.target.value);
  };


  return (
    <>
      <section className="max-w-[1150px] py-10 flex flex-col items-center justify-around 2xl:max-w-[1550px] min-h-screen mx-auto">
        <div className="flex items-center justify-between gap-2 w-full">
          <h1 className="text-[24px] uppercase font-bold">Create Profile</h1>
          <Button variant="outlined" color="inherit" className="btnadd">
            Cancel
          </Button>
        </div>
        <div className="max-w-[600px] w-full mx-auto flex flex-col gap-10 ">
         <div className="w-fit mx-auto">
         <label htmlFor="f1">
            <img src={avatar.src} alt="" />
            <input type="file" id="f1" accept="image" className="hidden" />
          </label>
         </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-[16px] font-semibold">Name</label>
            <input type="text" placeholder="Irvan Wibowo" className="w-full p-2 outline-none rounded-md bg-transparent border border-[#FFFFFF]"/>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-[16px] font-semibold">Descriptions</label>
            <textarea placeholder="Action Movie Expert, I love action films."
            className="w-full min-h-[122px] p-2 outline-none rounded-md bg-transparent border border-[#FFFFFF]"
            ></textarea>
          </div>
          <div className="">
          <p className="text-[16px] font-semibold">Social Media Automation</p>
            <FormControl className="w-full mt-2">
             <RadioGroup 
                className="grid grid-cols-3 w-full"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}>
                {["Facebook", "Instagram", "Tiktok"].map((item, i) => (
                    <FormControlLabel
                        key={i}value={item}
                        control={<Radio sx={{color: "#D71134",'&.Mui-checked': {color: "#D71134",},}}/>}
                        label={item}className="radiobtn"
                        sx={{color: selectedValue === item ? 'white' : 'gray',}}/>
                ))}
            </RadioGroup>
            </FormControl>  
          </div>
          <Button variant="contained" color="default"  className="trailerbtn">
            Continue
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default profile;
