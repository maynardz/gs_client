import './HeroImage.scss';

import Logo from '../../../assets/brand_assets/Logos/RGB/Green/PNG/GreeneStreet_Logo_RGB_Green.png';

const HeroImage = (props) => {
  return(
    <div className="heroImage_container">
      <div className='heroImage_wrapper'>
        <img className='hero_image' src={Logo} alt='Greene Street Flower Logo' />
      <p>Cannabis Co.</p>
      </div>
    </div>
  )
}

export default HeroImage;