import React from 'react';
import './Announcements.scss';
import KC_Store from '../../../assets/web/kanawha_location.jpg'
import CL_Store from '../../../assets/web/crosslanes_location.jpg'

import { Link } from "react-router-dom";

import { Card, Button } from 'antd';
const { Meta } = Card;

const Announcements = (props) => {
  return(
    <div>
      <div className='announcement_container'>
        <h1 style={{ textAlign: 'center', fontFamily: 'DomainLight', color: '#425030'}}>We're pleased to announce the grand opening of our new location in Kanawha City!</h1>
      </div>
      <div className='card_container'>
        <Card
          hoverable
          style={{
           width: 350,
           margin: '1em'
          }}
          cover={<img alt="example" src={KC_Store} style={{ height: '100%', width: '100%' }} />}
          >
          <Meta title="Kanawha City" description="5126 MacCorkle Ave SE, Charleston, WV 25304" />
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
          cover={<img alt="example" src={CL_Store} style={{ height: '100%', width: '100%' }} />}
          >
          <Meta title="Cross Lanes" description="5126 MacCorkle Ave SE, Charleston, WV 25304" />
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