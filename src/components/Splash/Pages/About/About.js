import React from "react";
import "./About.scss";
import Appbar from "../../Appbar/Appbar";

import about_stock from "../../../../assets/about_stock.jpg";
import mission_stock from "../../../../assets/mission_stock.jpg";
import product_icon from "../../../../assets/GreeneStreet_Icon_Accessories1_RGB_White.png";
import sunrise_icon from "../../../../assets/brand_assets/Icons/RGB/Green/PNG/Energy/GreeneStreet_Icon_Energy3_RGB_Green.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const About = (props) => {
  return (
    <div>
      <Appbar colorMode={props.colorMode} theme={props.theme} />
      <div className="header">
        <div style={{ position: "absolute", top: 100, left: 30 }}>
          <ArrowBackIosIcon
            style={{ color: "#425030", fontSize: "30px" }}
            onClick={() => window.history.back()}
          />
        </div>
        <h1>About</h1>
      </div>
      <div className="about_wrapper">
        <div className="flex-container">
          <div className="flex-text-container">
            <div className="text-wrapper">
              <h1>About Us</h1>
              <p>
                At Greene Street Cannabis Co., we are more than just a cannabis
                dispensary; we are a passionate community dedicated to providing
                safe, high-quality cannabis products to enhance your well-being.
                Our journey began with a vision to create a haven where cannabis
                enthusiasts and newcomers alike could explore the incredible
                world of cannabis with confidence and compassion.
              </p>
            </div>
          </div>
          <div className="flex-img-container">
            <img src={about_stock} />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-img-container">
            <img src={mission_stock} />
          </div>
          <div className="flex-text-container">
            <div className="text-wrapper">
              <h1>Our Mission</h1>
              <p>
                Our mission is simple yet profound: to be your trusted partner
                on your cannabis journey. We aim to break stereotypes, foster
                education, and promote responsible consumption. We believe that
                cannabis can bring joy, healing, and balance to people's lives,
                and we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="acc-wrapper">
          <div className="acc-container">
            <h1>Our Commitment</h1>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ fontFamily: "domainLight", color: "#425030" }}
                >
                  Quality Assurance
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "untitledSans_regular" }}>
                  We understand the importance of product quality and safety.
                  Our team works tirelessly to source and curate a wide
                  selection of premium cannabis products, ensuring that every
                  item on our shelves meets the highest industry standards.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  sx={{ fontFamily: "domainLight", color: "#425030" }}
                >
                  Education
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "untitledSans_regular" }}>
                  Knowledge is power, especially when it comes to cannabis. Our
                  knowledgeable and friendly staff is always here to answer your
                  questions, provide recommendations, and share insights into
                  the incredible world of cannabis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  sx={{ fontFamily: "domainLight", color: "#425030" }}
                >
                  Community Engagement
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "untitledSans_regular" }}>
                  We're more than just a dispensary; we're part of the
                  community. We actively participate in community events,
                  support local initiatives, and work to break down stigmas
                  surrounding cannabis use.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  sx={{ fontFamily: "domainLight", color: "#425030" }}
                >
                  Compassion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "untitledSans_regular" }}>
                  We are committed to providing compassionate care to our
                  customers, especially those seeking cannabis for medicinal
                  purposes. We strive to offer affordable options and support
                  for individuals looking to improve their quality of life
                  through cannabis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="products-container">
              <div className="products-icon">
                <img src={product_icon} />
              </div>
              <div className="products-text">
                <h2>Products</h2>
                <p>
                  Our carefully curated selection includes a wide range of
                  cannabis products to suit every preference and need. From
                  premium flower and concentrates to a variety of edibles,
                  topicals, and accessories, we have something for everyone.
                  We're constantly updating our inventory to offer the latest
                  innovations in the cannabis industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="visit-container">
          <div className="visit-text">
            <h2>Visit Us</h2>
            <p>
              When you step into Greene Street Cannabis Co., you'll find a
              welcoming atmosphere, knowledgeable staff, and a commitment to
              your well-being. Whether you're a seasoned cannabis connoisseur or
              a first-time visitor, you're part of our family. Thank you for
              choosing Greene Street Cannabis Co. as your cannabis destination.
              We look forward to serving you and helping you discover the many
              benefits of cannabis in a responsible and enjoyable manner.
              Together, we'll explore the incredible possibilities that this
              plant has to offer. Come visit us today, and let's embark on a
              journey of discovery and well-being.
            </p>
          </div>
        </div>
        <div className="ceo-wrapper">
          <div className="ceo-container">
            <div>
              <h1>Message from CEO</h1>
            </div>
            <div>
              <p>
                Dear Valued Patients, I want to take a moment to share with you
                the deep-rooted passion and purpose that led us to embark on
                this incredible journey in the cannabis industry. At Greene
                Street Cannabis Co., we are driven by a profound belief in the
                potential of cannabis to improve lives and promote well-being.
                <br />
                <br />
                When we first entered this industry, we did so with a vision of
                creating a space where individuals like you could access the
                healing and transformative power of cannabis in a safe and
                supportive environment. Our journey began with a commitment to
                breaking down the barriers and stereotypes that have surrounded
                cannabis for far too long.
                <br />
                <br />
                Cannabis has been used for centuries as a natural remedy, a
                source of inspiration, and a means of relaxation. It has the
                potential to alleviate pain, reduce anxiety, and enhance the
                quality of life for countless people. Yet, for too many years,
                it was shrouded in misinformation and stigma.
                <br />
                <br />
                We knew that it was our duty to change that narrative, to
                educate, and to provide you with a place where you could feel
                comfortable exploring the many benefits of cannabis. We wanted
                to create a haven where you could ask questions, seek guidance,
                and find the products that best suit your needs, whether for
                medicinal or recreational purposes.
                <br />
                <br />
                Our commitment to you, our valued patients, is unwavering. We
                are here to help you navigate the world of cannabis, to provide
                you with the highest quality products, and to offer
                compassionate care and support throughout your journey. Your
                well-being is at the heart of everything we do.
                <br />
                <br />
                As we continue to grow and evolve, we remain dedicated to
                staying at the forefront of the industry, always striving to
                offer you the latest innovations and the most trusted
                information. We are here to be your trusted partner, your source
                of knowledge, and your community of like-minded individuals who
                share in the belief that cannabis can make a positive difference
                in our lives.
                <br />
                <br />
                Thank you for choosing Greene Street Cannabis Co. as your
                cannabis destination. We are honored to be a part of your
                journey, and we look forward to serving you with the same
                passion and dedication that have driven us from the beginning.
                Together, let's explore the boundless potential of cannabis and
                work towards a brighter, healthier future.
                <br />
                <br />
                With gratitude and commitment,
                <br />
                <br />
                <b style={{color: '#ffff78'}}>Alexa Wolman</b>
                <br />
                CEO, Greene Street Cannabis Co.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
