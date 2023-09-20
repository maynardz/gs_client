import React from 'react';
import './BecomeAPatient.scss';
import Appbar from '../../Appbar/Appbar';

import { Spinner } from 'grommet';

import { LeftOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
const { Meta } = Card;

const BecomeAPatient = (props) => {

  const [loaded, setLoaded] = React.useState(false);
  
  const handleChange = () => {
    setLoaded(!loaded);
  };

  return (
    <div>
      <div className='header'>
        <div style={{ position: 'absolute', top: 30, left: 30 }}>
          <LeftOutlined style={{ color: 'white', fontSize: '30px' }} onClick={() => window.history.back()} />
        </div>
        <h1>Become a Patient</h1>
      </div>
      <Appbar />
      <br/>
      <br/>
      <br/>
      <h2 style={{textAlign: 'center', fontFamily: 'domainLight', color: '#425030', padding: '1.25em'}}>Wondering how to get a Medical Cannabis Card in West Virginia? Follow the 3 easy steps below to get started!</h2>
      <div className='patientSignup-info-container'>
        <div>
          <Card
            title='Schedule an Appointment'
            style={{
            width: 350,
            height: 275,
            margin: '1em'
            }}
          >
            <Meta description="For information regarding appointment availability at our weekly certification events contact 304-306-0679 or email bri.moore@dreamgreene.com." />
            <br />
            <Meta description="For information regarding appointment availability at our weekly certification events contact 304-306-0679 or email bri.moore@dreamgreene.com." />
          </Card>
        </div>
        <div>
          <Card
            title='Meet with a Doctor'
            style={{
            width: 350,
            height: 275,
            margin: '1em'
            }}
          >
            <Meta description="A doctor will determine whether you qualify for a West Virginia medical card after a quick 10-15 minute evaluation." />
          </Card>
        </div>
        <div>
          <Card
            title='Wait Time'
            style={{
            width: 350,
            height: 275,
            margin: '1em'
            }}
          >
            <Meta description="If approved, you'll receive your written certification within 24-48 hours which you can then use to apply online with the state for your West Virginia medical card." />
          </Card>
        </div>
      </div>
      <div className='iF-container'>
        {
          loaded ? null : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', height: '250px', width: '100%'}}>
              <Spinner size='medium' color={'#425030'} />
            </div>
          )
        }
        {/* <iframe onLoad={ () => handleChange()} className='iF' src="https://app.acuityscheduling.com/schedule.php?owner=14858346&appointmentType=47359585" frameBorder="0" height='800' width='100%' style={loaded ? {height: '800', width: '100%'} : {display: 'none'}}></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> */}
      </div>
    </div>
  )
}

export default BecomeAPatient;