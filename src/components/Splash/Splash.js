import * as React from 'react';
import './Splash.scss';   

import HeroImage from './HeroImage/HeroImage';
import Appbar from './Appbar/Appbar';
import Announcements from './Announcements/Announcements';
// import ImageScroll from './ImageScroll/ImageScroll';
import Partners from './Partners/Partners';
import Shop from './Shop/Shop';

import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';

const Splash = (props) => {

  const [keys, setKeys] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const callback = (e) => {
      // console.log(e);
      setKeys(prevState => [...prevState, e.keyCode]);
    }
    
    document.addEventListener('keydown', callback);

    return () => {
      document.removeEventListener('keydown', callback);
    }
    
  }, [])

  React.useEffect(() => {
    let toString = keys.toString();

    if (toString === '71,83,67,65,78,78,67,79') {
      setOpen(true);
    }
  }, [keys])

  const onClose = () => {
    setOpen(false);
    setKeys([]);
  };

  return (
    <div>
      {
        open ? (
          <Drawer
            title="Admin Login"
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{
              paddingBottom: 80,
            }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} type="primary">
                  Submit
                </Button>
              </Space>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Username"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter user name',
                      },
                    ]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
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
              </Row>
            </Form>
          </Drawer>
        ) : null
      }
      <div className='home_container'>
        <HeroImage />
        <Appbar />
        <Announcements />
        {/* <ImageScroll /> */}
        <div className='shop_container'>
          {/* <Shop /> */}
        </div>
        <Partners />
        <div className='ceo_container'></div>
      </div>
    </div>
  )
}

export default Splash;