import React from 'react';
import './About.scss';

import { LeftOutlined } from '@ant-design/icons';

import AboutImage from '../../../../assets/web/aboutImage.jpg';
import AccessoryIcon from '../../../../assets/brand_assets/Icons/RGB/Green/PNG/Accessories/GreeneStreet_Icon_Accessories3_RGB_Green.png';
import EnergyIcon from '../../../../assets/brand_assets/Icons/RGB/Green/PNG/Energy/GreeneStreet_Icon_Energy_RGB_Green.png';
import HeartIcon from '../../../../assets/brand_assets/Icons/RGB/Green/PNG/Relief/GreeneStreet_Icon_Relief1_RGB_Green.png';
// import BrandPattern from '../../../../assets/web/pattern.jpg';

const About = (props) => {

  return(
    <div>

      <div className='header'>
        <div style={{ position: 'absolute', top: 30, left: 30 }}>
          <LeftOutlined style={{ color: 'white', fontSize: '30px' }} onClick={() => window.history.back()} />
        </div>
        <h1>About Us</h1>
			</div>
      <div className='about_wrapper'>
        <div className='about_text_wrapper'>
          <div className='about_text'>
            <h1>Welcome to <br/>Greene Street</h1>
            <p>Greene Street is an emerging multi-state cannabis company whose primary focus is to supply its patients and customers with the best available products on the market. We also hope to provide our customers with the knowledge to make an educated decision on their journey to health and wellness.</p>
          </div>
        </div>
        <div className='about_image_container'>
          <img src={AboutImage} className='aboutImage' alt='CBD oil' />
        </div>
      </div>

      {/* <div className='ceo_container'></div> */}

      <div className='purpose_boxes'>
        <div className='purpose_box'>
          <img src={EnergyIcon} alt='Accessory Icon' style={{ height: '150px', width: 'auto', marginBottom: '3em' }} />
          <p>
            Greene Street's cannabis is all organically grown to the highest standards and is given the utmost level of care from seed to sale.
          </p>
        </div>
        <div className='purpose_box'>
          <img src={AccessoryIcon} alt='Energy Icon' style={{ height: '150px', width: 'auto', marginBottom: '3em' }} />
          <p>
            We are a customer-first organization offering our clients premium products and services. We strive to give each individual a one-of-a-kind experience and help them determine what best suits their personal health goals.
          </p>
        </div>
        <div className='purpose_box'>
          <img src={HeartIcon} alt='Heart Icon' style={{ height: '150px', width: 'auto', marginBottom: '3em' }} />
          <p>
            We've assembled a team of highly trained staff ready to aid you in your cannabis journey.
          </p>
        </div>
      </div>

      <div className='ceo_container'>
        <div className='message_text'>
          <h1>A Message from Our CEO</h1>
          <p>When I first envisioned Greene Street, three core questions arose that were, and still are, the driving force behind nearly every decision we make as a business. </p>
          <div className='ceo_vision_wrapper'>
            <div className='ceo_vision'>
              <p>
                1.) Why isn't cannabis integrated into today's healthcare system?
              </p>
            </div>
            <div className='ceo_vision'>
              <p>
                2.) Why can't a patient or consumer access a life-changing product and gain insight and knowledge to make decisions for a better wellness outcome?
              </p>
            </div>
            <div className='ceo_vision'>
              <p>
                3.) Lastly, and most importantly - how can we help?
              </p>
            </div>
          </div>
          <div className='final_words'>
            <p>We seek to aid our customers along their cannabis journey. We aim to be that positive step in healthcare - which may otherwise be a difficult conversation for a patient or consumer. We believe Greene Street can shine a light on a traditionally stigmatized avenue of achieving wellness and truly make it accessible to all in need.</p>
            <br />
            <p>Alexa Wolman</p>
            <p>CEO</p>
            <p>Greene Street Cannabis Co.</p>
          </div>									
        </div>
      </div>
    </div> 
  )
}

export default About;