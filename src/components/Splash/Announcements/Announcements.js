import React from "react";
import "./Announcements.scss";

import EnergyIconBlack from "../../../assets/brand_assets/Icons/RGB/Black/PNG/Energy/GreeneStreet_Icon_Energy_RGB_Black.png";
import EnergyIconWhite from '../../../assets/GreeneStreet_Icon_Energy_RGB_White.png';
import ReliefIconBlack from "../../../assets/brand_assets/Icons/RGB/Black/PNG/Relief/GreeneStreet_Icon_Relief6_RGB_Black.png";
import ReliefIconWhite from '../../../assets/GreeneStreet_Icon_Relief6_RGB_White.png';
import HeartIconBlack from "../../../assets/brand_assets/Icons/RGB/Black/PNG/Relief/GreeneStreet_Icon_Relief1_RGB_Black.png";
import HeartIconWhite from '../../../assets/GreeneStreet_Icon_Relief1_RGB_White.png';
import LogoGreen from '../../../assets/brand_assets/Logos/RGB/Green/PNG/GreeneStreet_Logo_RGB_Green.png';
import LogoWhite from '../../../assets/brand_assets/Logos/RGB/White/PNG/GreeneStreet_Logo_RGB_White.png';

// import { Link } from "react-router-dom";
import { Box } from "@mui/material";

///timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

const Announcements = (props) => {
  console.log(props);
  return (
    <div className="landing-wrapper">
      <div className="heading-container">
        <img className='prim-logo' src={props.theme.palette.mode === 'light' ? LogoGreen : LogoWhite} />
        <p className='prim-blurb'>
          At Greene Street Cannabis Co., our journey in the cannabis industry is
          guided by a three-fold commitment that defines who we are and what we
          strive to achieve. We exist to break stigmas and promote education,
          enhance well-being, and foster community and compassion. These
          principles are at the core of our mission, driving us to create a space
          where cannabis enthusiasts and newcomers alike can explore the
          incredible world of cannabis with confidence and care. Let's dive deeper
          into each of these pillars that shape our vision for a brighter future
          in the cannabis industry.
        </p>
      </div>
      <div className="timeline-container">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot sx={{border: 'none', background: 'none', boxShadow: 'none'}}>
                  <img className="timeline-icon" src={props.theme.palette.mode === 'light' ? EnergyIconWhite : EnergyIconBlack} />            
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" component="span" sx={{ fontFamily: 'domainLight', color: '#ffff78' }}>
                Breaking Stigmas and Promoting Education
              </Typography>
              <Typography sx={{ fontFamily: 'untitledSans_regular', color: 'white', fontSize: '16.5px', lineHeight: '35px' }}>
                Greene Street Cannabis Co. was founded with a mission to break
                down the stigmas surrounding cannabis use and to promote
                education. We believe that through knowledge, understanding, and
                responsible consumption, individuals can make informed decisions
                about how cannabis can benefit their lives. Our goal is to be a
                trusted source of information and guidance, empowering our
                community to explore the potential of cannabis safely.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" sx={{border: 'none', background: 'none', boxShadow: 'none'}}>
                <img className="timeline-icon" src={props.theme.palette.mode === 'light' ? ReliefIconWhite : ReliefIconBlack} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" component="span" sx={{ fontFamily: 'domainLight', color: '#ffff78' }}>
                Enhancing Well-Being
              </Typography>
              <Typography sx={{ fontFamily: 'untitledSans_regular', color: 'white', fontSize: '16.5px', lineHeight: '35px' }}>
                Our primary aim is to enhance the well-being of our patients and
                customers. We are committed to providing access to high-quality
                cannabis products that can improve the physical, mental, and
                emotional health of individuals. Whether you seek relief from
                pain, anxiety, or simply want to elevate your recreational
                experiences, we're here to help you find the right solutions
                tailored to your needs.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" sx={{border: 'none', background: 'none', boxShadow: 'none'}}>
                <img className="timeline-icon" src={props.theme.palette.mode === 'light' ? HeartIconWhite : HeartIconBlack } />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" component="span" sx={{ fontFamily: 'domainLight', color: '#ffff78', }}>
                Community and Compassion
              </Typography>
              <Typography sx={{ fontFamily: 'untitledSans_regular', color: 'white', fontSize: '16.5px', lineHeight: '35px' }}>
                Greene Street Cannabis Co. is deeply rooted in our local community
                and driven by compassion. We aim to create a welcoming and
                inclusive environment where everyone feels valued and supported.
                Our commitment extends to affordable options for medicinal users,
                community engagement, and giving back to the communities we serve.
                We strive to be more than just a dispensary; we aim to be a
                positive force for change in the cannabis industry, advocating for
                responsible and equitable practices.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Announcements;
