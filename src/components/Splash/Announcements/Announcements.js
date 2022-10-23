import React from 'react';
import './Announcements.scss';

// import { Link } from "react-router-dom";

const Announcements = (props) => {
  return(
    <div className='announcements_container'>
      <div className='container_left'>
        <div className='announcement_text'>
          <h1>Come Say</h1>
          <h1>Hello!</h1>
          <div className='supporting_text'>
            <p>
              {/* We are pleased to announce the grand opening of Greene Street Cannabis Co. at <Link to={'/locations'} style={{ textDecoration: 'none', color: '#4c87a1' }}>125 Lakeview Dr in Cross Lanes, West Virginia</Link>. We are committed to bringing our customers expert service and the best available products. */}
              We are pleased to announce the grand opening of Greene Street Cannabis Co. at 125 Lakeview Dr in Cross Lanes, West Virginia We are committed to bringing our customers expert service and the best available products.
            </p>
          </div>
        </div>
      </div>
      <div className='container_right'>
        <h3>Store Hours</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className='days'>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className='hours'>
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 7PM</p>
            <p>CLOSED</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements;