import React from 'react';
import { Card, Form, Typography, Input, Button, Alert, Flex } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginImage.jpg';
import useLogin from '../hooks/useLoging';

const Signin = () => {
  const { loading, error, loginUser } = useLogin();
  

  const handleLogin = async (values) => {
   loginUser(values);
  };

  return (
    <Card className='form-container'>
      <Flex gap="large">
        <Flex flex={1}>
          <img src={loginImage} className='auth-image' alt='Login' />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className='title'>Sign In</Typography.Title>
          {/* <Typography.Text type='secondary' strong className='slogan'>Unlock Your World.</Typography.Text> */}
          <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
            <Form.Item label="Email" name="email" rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Input valid email!" }
            ]}>
              <Input size='large' placeholder='Enter your Email' />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[
              { required: true, message: "Please input your password!" }
            ]}>
              <Input.Password size='large' placeholder='Enter your Password!' />
            </Form.Item>
            {/* {error && <Alert description={error} type='error' showIcon closable className='alert' />} */}
            {/* <Form.Item>
              <Button type='primary' size="large" htmlType="submit" loading={loading} className='btn'>
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form.Item> */}
            <Form.Item >
                    <Button 
                    type={`${loading ? '' : ''}`} 
                    size="large" htmlType="submit" 
                    className='btn'
                  
                    >
                     {loading? 'Sign In...' : 'Sign In'}
                   
                    </Button>
                  </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size='large' className='btn'>Create an Account</Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Signin;
