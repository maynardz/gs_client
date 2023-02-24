import React from 'react';
import './Announcements.scss';
import KC_Store from '../../../assets/web/kanawha_location.jpg'

import { Link } from "react-router-dom";

import { Card, Button } from 'antd';
const { Meta } = Card;

const Announcements = (props) => {
  return(
    <div>
      <div className='card_container'>
        <Card
          hoverable
          style={{
            minWidth: '350px',
            maxWidth: '768px'
          }}
          cover={<img alt="example" src={KC_Store} style={{ height: '100%', width: '100%' }} />}
          >
          <Meta title="Kanawha City is now open!" description="We are pleased to announce the grand opening of Greene Street Cannabis Co. at 5126 MacCorkle Ave SE, Charleston, WV 25304" />
          <div className='card_button_container'>
            <Button>
              <Link to='/shop/wv/kanawha'>
                Browse menu
              </Link>
            </Button>
          </div>
        </Card>
        <div className='button_container'>
          <Button>
            <Link to='/shop/wv/crosslanes'>
              Shop Cross Lanes
            </Link>
          </Button>
          <Button>
            <Link to='/shop/wv/kanawha'>
              Shop Kanawha
            </Link>
          </Button>
        </div>
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