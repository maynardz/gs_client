import React from 'react';
import './About.scss';

import { Timeline } from 'antd';
import { ShopOutlined, HeartOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

import Logo from '../../../../assets/brand_assets/Logos/RGB/Green/PNG/GreeneStreet_Symbol_RGB_Green.png';

import { Card, Col, Row } from 'antd';

const About = (props) => {

  return(
    <div style={{paddingBottom: '3em'}}>
      <div className='header'>
					<h1>About Us</h1>
				</div>
        <div className='about_wrapper'>
          <div className='about_text_wrapper'>
						<div className='about_text'>
							<h1>Welcome to Greene Street</h1>
							<p>Greene Street is an emerging multi-state cannabis company whose primary focus is to supply its patients and customers with the finest products available. We also hope to provide our customers with the knowledge to make an educated decision on their journey to health and wellness.</p>
						</div>
					</div>
        </div>
        <hr style={{width: '30%'}}/>
        <div className='purpose_text'>
          <h1>Our Purpose</h1>
        </div>
        <div className='timeline_container'>
          <Timeline mode='alternate'>
            <Timeline.Item dot={<ShopOutlined />} style={{fontSize: '16px'}}>We are a customer-first organization offering our clients premium products and services. We strive to give each individual a one-of-a-kind experience and help them determine what best suits their personal health goals.</Timeline.Item>
            <Timeline.Item dot={<SafetyCertificateOutlined />} style={{fontSize: '16px', margin: '2em'}}>Greene Street's cannabis is all organically grown to the highest standards and is given the utmost level of care from seed to sale.</Timeline.Item>
            <Timeline.Item dot={<HeartOutlined />} style={{fontSize: '16px'}}>We've assembled a team of highly trained staff ready to aid you in your cannabis journey.</Timeline.Item>
          </Timeline>
        </div>
        <hr style={{width: '30%', marginBottom: '3em'}}/>
        <div className='ceo_wrapper'>
				  <div className='ceo_text'>
					  <h1>A Message from Our CEO,</h1>
						<h1>Alexa Wolman</h1>
            <hr style={{width: '30%', marginBottom: '3em', color: '#ffff78'}}/>
            <p>When I first envisioned Greene Street, three core questions arose that were, and still are, the driving force behind nearly every decision we make as a business. </p>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="1.) Healthcare Integration" bordered={false} style={{ fontFamily: 'untitledSans_regular', color: '#425030' }}>
                    Why isn't cannabis integrated into today's healthcare system?
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="2.) Wellness" bordered={false} style={{ fontFamily: 'untitledSans_regular', color: '#425030' }}>
                  Why can't a patient or consumer access a life-changing product and gain insight and knowledge to make decisions for a better wellness outcome?
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="3.) Where we come in" bordered={false} style={{ fontFamily: 'untitledSans_regular', color: '#425030' }}>
                    Lastly, and most importantly - how can we help?
                  </Card>
                </Col>
              </Row>
            </div>
            <div className='final_words'>
              <h4>How we can help is simple:</h4>
              <p>We seek to aid our customers along their cannabis journey. We aim to be that positive step in healthcare - which may otherwise be a difficult conversation for a patient or consumer. </p>
              <p>We believe Greene Street can shine a light on a traditionally stigmatized avenue of achieving wellness and truly make it accessible to all in need.</p>
            </div>									
					</div>
			  </div>
    </div>
  )
}

export default About;