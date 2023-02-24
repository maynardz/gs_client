import React from 'react';
import './Appbar.scss';
// import wordmark from '../../../assets/brand_assets/Logos/RGB/Green/PNG/GreeneStreet_Monogram_RGB_Green.png';
import smallLeaf from '../../../assets/web/small-leaf.png';

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
                Crosslanes
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
      <>
        <img src={smallLeaf} style={{ height: '50px', padding: '0.25em'}} key='image' />
      </>
    )
  },
  {
    label: (
      <Link to='/locations'>
        Locations
      </Link>
    ),
    key: 'locations',
  },
  {
    label: (
      <Link to='/jobs'>
        Jobs
      </Link>
    ),
    key: 'jobs',
    // disabled: true
  },
];

const Appbar = () => {

  const [current, setCurrent] = React.useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  // React.useEffect(() => {
  //   window.onscroll = () => makeSticky();

  //   const navbar = document.getElementById('navbar');
  //   // console.log(navbar);
  //   const sticky = navbar.offsetTop;
  //   // console.log(sticky);

  //   const makeSticky = () => {
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add('sticky');
  //     } else {
  //       navbar.classList.remove('sticky');
  //     }
  //   }
  // }, []);

  return (
    <div id='navbar'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', backgroundColor: '#d0d2cb' }} />
    </div>
  )
};

export default Appbar;