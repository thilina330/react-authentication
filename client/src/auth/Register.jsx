import React from 'react'
import {Card, Form, Typography,Flex, Input, Button, Alert} from 'antd'
import { Link } from 'react-router-dom';
import registerImage from '../assets/OIP.jpg'
import useSignUp from '../hooks/useSignUp';


const Register = () => {

  const {loading,error,registerUser} = useSignUp()

  const handleRegister = (values) => {
     registerUser(values)
  }

  return (
   <Card className='form-contanier'>
     <Flex gap="large">
      {/* form create */}
       <Flex vertical flex={1}>
              <Typography.Title level={3} strong className='title'>Create an account</Typography.Title>
              <Typography.Text type='secondary' strong className='slogen'>join for exclusive access!</Typography.Text>
       
              <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                  <Form.Item label="Full Name" name="name" rules={[{

                    required:true,
                    message:"please input your full name!"

                  }]}>
                        <Input size='large' placeholder='Enter your full Name'/>
                  </Form.Item>

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

                  <Form.Item label="Confirm-Password" name="confirmpassword" rules={[{

                    required:true,
                    message:"please input Re-Password!"

                    }
                    ]}>
                        <Input.Password size='large' placeholder='Re-Enter your Password!'/>
                  </Form.Item>
                  {
                    error && <Alert description={error} type='error' showIcon closable className='alert' />
                  }
                  <Form.Item >
                    <Button 
                    type={`${loading ? '' : ''}`} 
                    size="large" htmlType="submit" 
                    className='btn'
                  
                    >
                     {loading? <Span/> : 'Create Account'}
                   
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    
                    <Link to="/login">
                      <Button size='large' className='btn'>Sign In</Button>
                    </Link>
                  </Form.Item>
            
              </Form>
       </Flex>
       {/* image create */}
       <Flex flex={1}>
          <img src={registerImage} className='auth-image'/>
       </Flex>
     </Flex>
   </Card>
  )
}

export default Register
