import React from 'react';
import './Jobs.scss';
import APIURL from '../../../helpers/environment';
import Appbar from '../../Appbar/Appbar';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import JobsForm from './JobsForm/JobsForm';

// import { Navigate } from 'react-router-dom';

const Jobs = (props) => {

  const [file, setFile] = React.useState(null);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
  const [formLayout, setFormLayout] = React.useState('vertical');
  const [formSuccess, setFormSuccess] = React.useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
    formData.append('attachment', file);

    fetch(`${APIURL}/jobs/upload`, {
      method: 'POST',
      body: formData
    })
		.then(response => response.text())
		.then(result => { 
      console.log(result);
        setFormSuccess(true);
        setFile(null);
			  setFirstName('');
			  setLastName('');
			  setEmail('');
        document.getElementById('jobsForm').reset();
    })
		.catch(err => console.log('error', err))
  }

  return (
    <div>
      <Appbar colorMode={props.colorMode} theme={props.theme} />
      <div className='header'>
        <div style={{ position: 'absolute', top: 100, left: 30 }}>
          <ArrowBackIosIcon style={{ color: '#425030', fontSize: '30px' }} onClick={() => window.history.back()} />
        </div>
        <h1>Join the Team</h1>
      </div>
      <div className='flex_form_wrapper'>
        <div className='form_text_wrapper'>
          <div>
            <h1>Interested in a career at Greene Street?</h1>
            <p>Provide us with some details + your resume and we'll get in touch!</p>
          </div>
        </div>
        <hr style={{ width: '15%' }} />
        <div className='form_wrapper'>
          <JobsForm handleUpload={handleUpload} file={file} setFile={setFile} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} formLayout={formLayout} setEmail={setEmail} onFinish={onFinish} onFinishFailed={onFinishFailed} formSuccess={formSuccess} setFormSuccess={setFormSuccess} />
        </div>
      </div>
      <div className='ceo_container'></div>
    </div>
  );
};

export default Jobs;