import React from 'react'
import {Card, Form, Typography,Flex, Input, Button, Alert} from 'antd'
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginImage.jpg'

const Signin = () => {

  const handleLogin = async(values) =>{
    console.log(values);
  }

  return (
    <Card className='form-contanier'>
     <Flex gap="large">
      {/* image create */}
      <Flex flex={1}>
          <img src={loginImage} className='auth-image'/>
       </Flex>
      {/* form create */}
       <Flex vertical flex={1}>
              <Typography.Title level={3} strong className='title'>Sign In</Typography.Title>
              <Typography.Text type='secondary' strong className='slogen'>Unlock You World.</Typography.Text>
       
              <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                  

                  <Form.Item label="Email" name="email" rules={[{

                  required:true,
                  message:"please input your Email!"

                  },{
                    type: "email",
                    message: "input valid email!"
                  }
                  ]}>
                      <Input size='large' placeholder='Enter your Email'/>
                  </Form.Item>

                  <Form.Item label="Password" name="password" rules={[{

                    required:true,
                    message:"please input your password!"

                    }
                    ]}>
                        <Input.Password size='large' placeholder='Enter your Password!'/>
                  </Form.Item>

                  
                  {/* {
                    error && <Alert description={error} type='error' showIcon closable className='alert' />
                  } */}
                  <Form.Item >
                    <Button 
                    // type={`${loading ? '' : ''}`} 
                    size="large" htmlType="submit" 
                    className='btn'
                  
                    >
                     {/* {loading? <Span/> : 'Create Account'} */}
                     Sign In
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
  )
}

export default Signin
