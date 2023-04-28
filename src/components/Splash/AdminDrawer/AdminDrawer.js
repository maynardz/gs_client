import React from 'react';

import { Button, Col, Drawer, Form, Input, Row, Space, Checkbox } from 'antd';

const AdminDrawer = props => {
  const [form] = Form.useForm();
  const email = Form.useWatch('email', form);
  const password = Form.useWatch('password', form);

  const handleSubmit = (values) => {
    console.log(values);
    // event.preventDefault();
  
    fetch('http://localhost:5500/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: values.email,
          password: values.password
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      props.updateLocalStorage(json.sessionToken, json.user);
      props.setUser(json.user);
    });

    form.resetFields();
  };

  const onFinish = (values) => {
    handleSubmit(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title="Admin Login"
      width={720}
      onClose={props.onClose}
      open={props.open}
      bodyStyle={{
        paddingBottom: 80,
      }}
      extra={
        <Space>
          <Button onClick={props.onClose}>Cancel</Button>
        </Space>
      }
    >
      <Form 
        form={form} 
        layout="vertical" 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed} 
        initialValues={{
          remember: true
        }} 
        autoComplete='off'
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              value={email}
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please enter email',
                },
              ]}
            >
              <Input placeholder="Please enter email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              value={password}
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password',
                },
              ]}
            >
              <Input.Password placeholder="Please enter password" />
            </Form.Item>
          </Col>
          {/* <Col span={12}>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 0,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col> */}
        </Row>
        <Button type='primary' htmlType='submit' >
          Submit
        </Button>
      </Form>
    </Drawer>
  )
}

export default AdminDrawer;