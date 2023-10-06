import React from 'react';
import './Footer.scss';

import WordmarkStacked from '../../../assets/brand_assets/Logos/RGB/White/PNG/GreeneStreet_WordmarkStacked_RGB_White.png';

import Box from "@mui/material/Box";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = props => {
  console.log(props);
  return (
    <Box
      sx={{
        backgroundColor: props.theme.palette.mode === 'light' ? "#425030" : "#121212",
        backgroundImage: props.theme.palette.mode === 'light' ? undefined : "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))"
      }}
    >
      <div className='footer-container'>
        <div className='footer-flexContainer'>
          <div className='image-container'>
            <img src={WordmarkStacked} alt='' style={{height: '75px', width: 'auto', marginBottom: '2em', marginTop: '1em'}} />
          </div>
          <p>Greene Street is a medical cannabis brand focused on bringing relief to patients through natural products.</p>
        </div>
        <div className='footer-flexContainer'>
          <div>
            <h2>Contact Us</h2>
            <div className='underline'></div>
            <p><b>Kanawha</b></p>
            <p>5126 MacCorkle Ave SE, Charleston, WV 25304</p>
            <p>(304) 306-0679</p>      
            <br/>
            <p><b>Cross Lanes</b></p>
            <p>125 Lakeview Dr, Charleston, WV 25313</p>
            <p>(304) 564-6017</p>   
          </div>
        </div>
        <div className='footer-flexContainer'>
          <div className='working-hours'>
            <h2>Hours</h2>
            <div className='underline'></div>
            <p>Monday - 11:00AM TO 8:00PM</p>
            <p>Tuesday - 11:00AM TO 8:00PM</p>
            <p>Wednesday - 11:00AM TO 8:00PM</p>
            <p>Thursday - 11:00AM TO 8:00PM</p>
            <p>Friday - 11:00AM TO 8:00PM</p>
            <p>Saturday - 11:00AM TO 7:00PM</p>
            <p>Sunday - CLOSED</p>
          </div>
        </div>
        <div className='footer-flexContainer'>
          <div>
            <h2>Socials</h2>
            <div className='underline'></div>
            <div className='icon-container'>
              <span>
                <a href='https://www.facebook.com/profile.php?id=100092253097996' style={{color: 'inherit'}}>
                  <FacebookIcon />
                </a>
              </span>
              <span>
                <a href='https://www.instagram.com/greenestreetwv/' style={{color: 'inherit'}}>
                  <InstagramIcon />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Footer;