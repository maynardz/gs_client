import React from 'react';
import './Appbar.scss';

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
    disabled: true
  },
];

const Appbar = () => {

  const [current, setCurrent] = React.useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  )
};

export default Appbar;