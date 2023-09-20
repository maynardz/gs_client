import React from "react";
import "./Announcements.scss";

import EnergyIcon from "../../../assets/brand_assets/Icons/RGB/Green/PNG/Energy/GreeneStreet_Icon_Energy_RGB_Green.png";
import ReliefIcon from "../../../assets/brand_assets/Icons/RGB/Green/PNG/Relief/GreeneStreet_Icon_Relief6_RGB_Green.png";
import HeartIcon from "../../../assets/brand_assets/Icons/RGB/Green/PNG/Relief/GreeneStreet_Icon_Relief1_RGB_Green.png";

import { Link } from "react-router-dom";

const Announcements = (props) => {
  return (
    <div>
      <div className="announcement_container">
        <p>
          At Greene Street Cannabis Co., our journey in the cannabis industry is
          guided by a three-fold commitment that defines who we are and what we
          strive to achieve. We exist to break stigmas and promote education,
          enhance well-being, and foster community and compassion. These
          principles are at the core of our mission, driving us to create a
          space where cannabis enthusiasts and newcomers alike can explore the
          incredible world of cannabis with confidence and care. Let's dive
          deeper into each of these pillars that shape our vision for a brighter
          future in the cannabis industry.
        </p>
      </div>
      <div>
        <div className="info-container">
          <div className="text-container">
            <h1>Breaking Stigmas and Promoting Education</h1>
            <p>
              Greene Street Cannabis Co. was founded with a mission to break
              down the stigmas surrounding cannabis use and to promote
              education. We believe that through knowledge, understanding, and
              responsible consumption, individuals can make informed decisions
              about how cannabis can benefit their lives. Our goal is to be a
              trusted source of information and guidance, empowering our
              community to explore the potential of cannabis safely.
            </p>
          </div>
          <div className="icon-container">
            <img src={EnergyIcon} alt="" />
          </div>
        </div>
        <div className="info-container">
          <div className="icon-container">
            <img src={ReliefIcon} alt="" />
          </div>
          <div className="text-container">
            <h1>Enhancing Well-Being</h1>
            <p>
              Our primary aim is to enhance the well-being of our patients and
              customers. We are committed to providing access to high-quality
              cannabis products that can improve the physical, mental, and
              emotional health of individuals. Whether you seek relief from
              pain, anxiety, or simply want to elevate your recreational
              experiences, we're here to help you find the right solutions
              tailored to your needs.
            </p>
          </div>
        </div>
        <div className="info-container">
          <div className="text-container">
            <h1>Community and Compassion</h1>
            <p>
              Greene Street Cannabis Co. is deeply rooted in our local community
              and driven by compassion. We aim to create a welcoming and
              inclusive environment where everyone feels valued and supported.
              Our commitment extends to affordable options for medicinal users,
              community engagement, and giving back to the communities we serve.
              We strive to be more than just a dispensary; we aim to be a
              positive force for change in the cannabis industry, advocating for
              responsible and equitable practices.
            </p>
          </div>
          <div className="icon-container">
            <img src={HeartIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
