import React from 'react';
import './Appbar.scss';

import Logo from '../../../assets/brand_assets/Logos/RGB/White/PNG/GreeneStreet_WordmarkStacked_RGB_White.png';
// import smallLeaf from '../../../assets/web/small-leaf.png';

import { Link } from "react-router-dom";

import { Menu } from 'antd';

const items = [
  {
    label: (
      <Link to='/about'>
        About
      </Link>
    ),
    key: 'about',
    // disabled: true
  },
  {
    label: 'Shop',
    children: [
      {
        type: 'group',
        label: 'West Virginia',
        children: [
          {
            label: (
              <Link to='/shop/wv/crosslanes'>
                Cross Lanes
              </Link>
            ),
            key: 'shop-crosslanes'
          }, {
            label: (
              <Link to='/shop/wv/kanawha'>
                Kanawha
              </Link>
            ),
            key: 'shop-kanawha'
          }
        ],
      }
    ]
  },
  {
    label: (
      <Link to='/locations'>
        Locations
      </Link>
    ),
    key: 'locations',
  },
  // {
  //   label: (
  //     <Link to='/'>
  //       <img src={smallLeaf} style={{ height: '45px', padding: '0.25em'}} key='image' />
  //     </Link>
  //   )
  // },
  {
    label: (
      <Link to='/jobs'>
        Jobs
      </Link>
    ),
    key: 'jobs',
    // disabled: true
  },
  {
    label: (
      <Link to='/become-a-patient'>
        Become a Patient
      </Link>
    ),
    key: 'bap',
    // disabled: true
  },
  {
    label: (
      <a href='https://learninggreenehouse.blogspot.com/'>
        Blog
      </a>
    ),
    key: 'blog',
    // disabled: true
  }
];

const Appbar = (props) => {

  const [current, setCurrent] = React.useState('mail');

  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div id='navbar'>
      <div className='logo-container'>
        <img src={Logo} alt='Greene Street Wordmark' />
      </div>
      <div className='nav-container'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  />
      </div>
    </div>
  )
};

export default Appbar;