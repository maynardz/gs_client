import './HeroImage.scss';

import Logo from '../../../assets/brand_assets/Logos/RGB/White/PNG/GreeneStreet_Logo_RGB_White.png';
import mobile_logo from  '../../../assets/brand_assets/Logos/RGB/White/SVG/GreeneStreet_Symbol_RGB_White.svg';

import { motion } from "framer-motion";

const HeroImage = (props) => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return(
    <div className="heroImage_container">
      <div className='heroImage_wrapper'>
        <motion.svg 
          className='gs-logo-svg'
          xmlns="http://www.w3.org/2000/svg"
          fill='none'
          viewBox="0 0 169.2 111.8"
          initial="hidden"
          animate="visible"
          style={{ overflow: 'visible' }}
        >
            <motion.path
              d="M8.7,104.2h5.8v0.3c0,3.4-2.2,5.4-5.8,5.4c-4.2,0-6.4-2.9-6.4-7.5c0-4.7,2.4-7.7,6.3-7.7
              c3,0,4.9,1.7,5.7,4.9l2.2-0.6c-1-4.1-3.8-6.5-7.8-6.5c-5,0-8.7,3.9-8.7,9.8c0,5.8,2.9,9.4,8.2,9.4c3,0,5.3-1.4,6.4-3.9h0.1
              l0.2,3.6h1.8v-9.1h-8C8.7,102.3,8.7,104.2,8.7,104.2z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={1}
            />
            <motion.path
              d="M26.2,97.6c-1.8,0-3.1,1.2-3.9,3.2l0,0v-3h-2.2v13.6h2.2v-6.8c0-3.3,1.2-5.5,3.1-5.5c1.2,0,2,0.9,2,2.6
              c0,0.5-0.1,1.4-0.2,1.9l2.1-0.3c0.1-0.6,0.2-1.4,0.2-1.9C29.5,98.9,28.2,97.6,26.2,97.6z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={2}
            />
            <motion.path
              d="M37.8,109.9c-2.6,0-4.2-1.9-4.3-4.8h10.1c0-1.8-0.3-3.3-0.9-4.5c-1-1.9-2.7-3-5-3c-3.7,0-6.4,2.9-6.4,7.1
              c0,4.3,2.5,7.1,6.5,7.1c2.8,0,4.9-1.5,6-4.2L42,107C41.1,109,39.8,109.9,37.8,109.9z M37.6,99.4c1.5,0,2.6,0.7,3.2,2.1
              c0.3,0.6,0.4,1.2,0.5,2.1h-7.8C33.8,101,35.3,99.4,37.6,99.4z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={3}
            />
            <motion.path
              d="M52.1,109.9c-2.6,0-4.2-1.9-4.3-4.8h10.1c0-1.8-0.3-3.3-0.9-4.5c-1-1.9-2.7-3-5-3c-3.7,0-6.4,2.9-6.4,7.1
              c0,4.3,2.5,7.1,6.5,7.1c2.8,0,4.9-1.5,6-4.2l-1.8-0.6C55.4,109,54.2,109.9,52.1,109.9z M51.9,99.4c1.5,0,2.6,0.7,3.2,2.1
              c0.3,0.6,0.4,1.2,0.5,2.1h-7.8C48.1,101,49.6,99.4,51.9,99.4z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={4}
            />
            <motion.path
              d="M67.8,97.6c-2.1,0-3.9,1.2-4.9,3.5h-0.1v-3.2h-2.1v13.6h2.2v-6.7c0-3.4,1.6-5.4,4.1-5.4
              c2.3,0,3.3,1.3,3.3,4.2v7.8h2.2v-8.3C72.5,99.5,70.8,97.6,67.8,97.6z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={5}
            />
            <motion.path
              d="M81.9,109.9c-2.6,0-4.2-1.9-4.3-4.8h10.1c0-1.8-0.3-3.3-0.9-4.5c-1-1.9-2.7-3-5-3c-3.7,0-6.4,2.9-6.4,7.1
              c0,4.3,2.5,7.1,6.5,7.1c2.8,0,4.9-1.5,6-4.2l-1.8-0.6C85.1,109,83.9,109.9,81.9,109.9z M81.6,99.4c1.5,0,2.6,0.7,3.2,2.1
              c0.3,0.6,0.4,1.2,0.5,2.1h-7.8C77.8,101,79.3,99.4,81.6,99.4z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={6}
            />
            <motion.path
              d="M104.5,101.7c-3.8-1.2-7.5-0.7-7.5-3.9c0-2.2,1.6-3.4,4.1-3.4c2.6,0,4.2,1.2,4.8,3.8l2.1-0.5
              c-0.8-3.4-3.1-5.2-6.8-5.2c-3.7,0-6.4,2-6.4,5.5c0,1.3,0.4,2.4,1.2,3.1c0.6,0.6,1.4,1,2.4,1.3c4.2,1.2,7.6,0.7,7.6,3.8
              c0,2.3-1.6,3.6-4.5,3.6c-3.1,0-5.1-1.4-5.5-4.3l-2.2,0.6c0.6,3.7,3.4,5.6,7.6,5.6s6.8-2.2,6.8-5.6c0-1.4-0.4-2.4-1.2-3.2
              C106.4,102.5,105.7,102.1,104.5,101.7z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={7}
            />
            <motion.path
              d="M114.8,93.9l-2.2,1.1v2.9h-2.9v1.7h2.8v8.1c0,2.8,1.2,4.1,4,4.1c1,0,1.7-0.1,2.4-0.4v-1.7
              c-0.5,0.1-1.1,0.2-1.8,0.2c-1.7,0-2.3-0.7-2.3-2.5v-7.8h4.2v-1.7h-4.2V93.9z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={8}
            />
            <motion.path
              d="M127.4,97.6c-1.8,0-3.1,1.2-3.9,3.2l0,0v-3h-2.2v13.6h2.2v-6.8c0-3.3,1.2-5.5,3.1-5.5c1.2,0,2,0.9,2,2.6
              c0,0.5-0.1,1.4-0.2,1.9l2.1-0.3c0.1-0.6,0.2-1.4,0.2-1.9C130.6,98.9,129.4,97.6,127.4,97.6z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={9}
            />
            <motion.path
              d="M139,109.9c-2.6,0-4.2-1.9-4.3-4.8h10.1c0-1.8-0.3-3.3-0.9-4.5c-1-1.9-2.7-3-5-3c-3.7,0-6.4,2.9-6.4,7.1
              c0,4.3,2.5,7.1,6.5,7.1c2.8,0,4.9-1.5,6-4.2l-1.8-0.6C142.3,109,141,109.9,139,109.9z M138.8,99.4c1.5,0,2.6,0.7,3.2,2.1
              c0.3,0.6,0.4,1.2,0.5,2.1h-7.8C135,101,136.5,99.4,138.8,99.4z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={10}
            />
            <motion.path
              d="M153.3,109.9c-2.6,0-4.2-1.9-4.3-4.8h10c0-1.8-0.3-3.3-0.9-4.5c-1-1.9-2.7-3-5-3c-3.7,0-6.4,2.9-6.4,7.1
              c0,4.3,2.5,7.1,6.5,7.1c2.8,0,4.9-1.5,6-4.2l-1.8-0.6C156.6,109,155.3,109.9,153.3,109.9z M153.1,99.4c1.5,0,2.6,0.7,3.2,2.1
              c0.3,0.6,0.4,1.2,0.5,2.1H149C149.3,101,150.8,99.4,153.1,99.4z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={11}
            />
            <motion.path
              d="M169.2,99.6v-1.7H165v-4l-2.2,1.1v2.9H160v1.7h2.8v8.1c0,2.8,1.2,4.1,4,4.1c1,0,1.7-0.1,2.4-0.4v-1.7
              c-0.5,0.1-1.1,0.2-1.8,0.2c-1.7,0-2.3-0.7-2.3-2.5v-7.8C165.1,99.6,169.2,99.6,169.2,99.6z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={12}
            />
            <motion.path
              d="M100.8,63.7v-9.9V26.1v-9.7c0-9-7.3-16.4-16.4-16.4S68,7.4,68,16.5v9.6v27.7v9.9c0,9,7.3,16.4,16.4,16.4
              S100.8,72.8,100.8,63.7z M99.5,52.6H86.9l12.7-6.8L99.5,52.6L99.5,52.6z M99.5,44.4l-12.9,7l12.9-17.3V44.4z M99.5,16.5v9.6V32
              L86,50l12-40C99,11.9,99.5,14.1,99.5,16.5z M85,1.4c5.1,0.2,9.6,3,12.2,7L85,49V1.4z M85,53.9h14.5v9.9c0,8.1-6.5,14.8-14.5,15.1
              V53.9z M69.3,26.1v-9.7c0-2.3,0.5-4.5,1.5-6.5l12,40.1L69.3,32V26.1z M69.3,34.1l12.9,17.2l-12.9-7V34.1z M69.3,45.8L82,52.6
              H69.3V45.8z M83.8,78.8c-8-0.3-14.5-7-14.5-15.1v-9.9h14.5V78.8z M83.8,49L71.6,8.4c2.6-4.1,7-6.8,12.2-7
              C83.8,1.4,83.8,49,83.8,49z"
              stroke='white'
              strokeWidth={0.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={draw}
              custom={13}
            />
        </motion.svg>
      </div>
    </div>
  )
}

export default HeroImage;