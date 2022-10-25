import * as React from 'react';
import './Splash.scss';

// import ScrollBanner from './ScrollBanner/ScrollBanner';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Appbar from './Appbar/Appbar';
import Announcements from './Announcements/Announcements';
// import ImageScroll from './ImageScroll/ImageScroll';
import Partners from './Partners/Partners';
import Shop from './Shop/Shop';

const Splash = (props) => {

  return (
    <div>
      {/* <ScrollBanner /> */}
      <div className='home_container'>
        <BackgroundImage />
        <div className='fitted_content'>
          <Appbar />
          <Announcements />
          {/* <ImageScroll /> */}
          <div className='shop_container'>
            <Shop />
          </div>
          <Partners />
        </div>
      </div>
    </div>
  )
}

export default Splash;