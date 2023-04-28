import React from 'react';
import './Announcements.scss';
import KC_Store from '../../../assets/web/kanawha_location.jpg'
import CL_Store from '../../../assets/web/crosslanes_location.jpg'
import KC from '../../../assets/shopcard_kanawha.jpg';
import CL from '../../../assets/shopcard_crosslanes.jpg';

import { Link } from "react-router-dom";

import { Card, Button } from 'antd';
const { Meta } = Card;

const Announcements = (props) => {
  return(
    <div>
      <div className='announcement_container'>
        <div className='news_header_container'>
          <h1>Shop</h1>
          <hr />
        </div>
        <h1 style={{fontFamily: 'DomainLight', color: '#425030', fontSize: '20px'}}>To ensure the best possible shopping experience, please select your preferred location from the options below. This will allow us to show you products, prices, and deals that are relevant to your area. Thank you for choosing Greene Street!</h1>
      </div>
      <div className='card_container'>
        <Card
          hoverable
          style={{
           width: 350,
           margin: '1em'
          }}
          cover={<img alt="example" src={KC} style={{ height: '100%', width: '100%' }} />}
          >
          <Meta description="5126 MacCorkle Ave SE, Charleston, WV 25304" />
          <div className='card_button_container'>
            <Button>
              <Link to='/shop/wv/kanawha'>
                Browse menu
              </Link>
            </Button>
          </div>
        </Card>
        
        <Card
          hoverable
          style={{
            width: 350,
            margin: '1em'
          }}
          cover={<img alt="example" src={CL} style={{ height: '100%', width: '100%' }} />}
          >
          <Meta description="125 Lakeview Dr, Cross Lanes, WV 25313" />
          <div className='card_button_container'>
            <Button>
              <Link to='/shop/wv/crosslanes'>
                Browse menu
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      {/* <div className="parallax"></div>
      <div style={{ textAlign: 'center', fontFamily: 'DomainLight' }}>
        <h1>News</h1>
      </div>
      <div className='announcements_container'>
        <div>
        </div>
      </div> */}
    </div>
  )
}

export default Announcements;