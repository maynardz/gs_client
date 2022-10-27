import React from 'react';
import './Jobs.scss';
import APIURL from '../../../helpers/environment';

import { Button, message, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const Jobs = () => {

  const [file, setFile] = React.useState(null);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
  const [formLayout, setFormLayout] = React.useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = () => {
    const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
    formData.append('attachment', file);

    fetch(`${APIURL}/jobs/upload`, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(() => 
			setFile(null),
			setFirstName(''),
			setLastName(''),
			setEmail(''),
		)
		.catch(err => alert(err))
  }

  const props = {
    name: 'attachment',
    multiple: false,
    onChange(info) {
      setFile(info.file);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null; 

  return (
    <div>
      <div className='header'>
        <h1>Join the Team</h1>
      </div>
      <div className='flex_form_wrapper'>
        <div className='form_wrapper'>
          <Form
            {...formItemLayout}
            layout={formLayout}
            name="basic"
            encType='multipart/form-data'
            labelCol={{
              span: 4
            }}
            wrapperCol={{
              span: 18
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name',
                },
              ]}
            >
              <Input onChange={(e) => setFirstName(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name',
                },
              ]}
            >
              <Input onChange={(e) => setLastName(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              labelCol={{
                span: 4
              }}
              wrapperCol={{
                span: 18
              }}
            >
              <Dragger {...props} beforeUpload={()=> {
                return false; }}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>

            <Form.Item
              labelCol={{
                span: 4
              }}
              wrapperCol={{
                span: 18
              }}
            >
              <Button 
                type="primary"
                onClick={(e) => handleUpload(e)}
                // loading={uploading}
                disabled={firstName === "" || lastName === "" || email === ""}
              >
                Submit
              </Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default Jobs;