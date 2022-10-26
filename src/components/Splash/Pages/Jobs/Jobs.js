import React from 'react';
import APIURL from '../../../helpers/environment';

import { Button, message, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const Jobs = () => {

  const [file, setFile] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('attachment', file);
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);

    fetch(`${APIURL}/image/upload`, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(() => 
			setFile(null),
			setFirstName(''),
			setLastName(''),
			setEmail(''),
      setUploading(false)
		)
		.catch(err => alert(err))
  }

  const props = {
    name: 'attachment',
    multiple: false,
    onChange(info) {
      setFile(info.file.name);
      setUploading(true);
      // const { status } = info.file;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      //   setFile(info.file)
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  

  return (
    <div>
      <div className='header'>
        <h1>Join the Team</h1>
      </div>
      <Form
        name="basic"
        encType='multipart/form-data'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
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
          name="first name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={(e) => setFirstName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last name"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
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
              message: 'Please input your password!',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Dragger {...props} beforeUpload={()=> {
          /* update state here */
          return false; }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button 
            type="primary"
            onClick={(e) => handleUpload(e)}
            // loading={uploading}
            // disabled={file === null}
          >
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Jobs;