import React from 'react';

import { Button, message, Form, Input, Upload, Alert } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const JobsForm = (props) => {

  const formItemLayout =
    props.formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null; 
  
  const draggerProps = {
    name: 'attachment',
    multiple: false,
    onChange(info) {
      const isPDF = info.file.type === 'application/pdf';
      // console.log(isPDF);
      if (!isPDF) {
        message.error(`${info.file.name} is not a .pdf file`);
      }

      if (isPDF) {
        props.setFile(info.file);
      } 

      return isPDF || Dragger.LIST_IGNORE;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const onClose = (e) => {
    props.setFormSuccess(false);
  };

  return (
    <Form
      {...formItemLayout}
      layout={props.formLayout}
      id="jobsForm"
      name="basic"
      encType='multipart/form-data'
      initialValues={{
        remember: true,
      }}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
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
        style={{ fontFamily: 'untitledSans_regular' }}
      >
        <Input onChange={(e) => props.setFirstName(e.target.value)} />
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
        style={{ fontFamily: 'untitledSans_regular' }}
      >
        <Input onChange={(e) => props.setLastName(e.target.value)} />
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
        style={{ fontFamily: 'untitledSans_regular' }}
      >
        <Input onChange={(e) => props.setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label='Please upload your resume as a .pdf file'
        labelCol={{
          span: 8
        }}
        style={{ fontFamily: 'untitledSans_regular' }}
      >
        <Dragger {...draggerProps} beforeUpload={()=> {
          return false; 
          }}
        >
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
        // wrapperCol={{
        //   span: 18
        // }}
      >
        <Button 
          // type="primary"
          onClick={(e) => props.handleUpload(e)}
          // loading={uploading}
          disabled={props.firstName === "" || props.lastName === "" || props.email === "" || props.file === null}
        >
          Submit
        </Button>
      </Form.Item>

      {
        props.formSuccess ? (
          <Form.Item
            labelCol={{
              span: 4
            }}
          >
            <Alert message="Success Text" type="success" closable onClose={onClose} />
          </Form.Item>
        ) : null
      }

    </Form>
  )
}

export default JobsForm;