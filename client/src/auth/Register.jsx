import React from 'react'
import {Card, Form, Typography,Flex, Input} from 'antd'


const Register = () => {

  const handleRegister = (values) => {
     console.log(values);
  }

  return (
   <Card className='form-contanier'>
     <Flex>
      {/* form create */}
       <Flex vertical flex={1}>
              <Typography.Title level={3} strong className='title'>Create an account</Typography.Title>
              <Typography.Text type='secondary' strong className='slogen'>join for exclusive access!</Typography.Text>
       
              <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                  <Form.Item label="Full Name" name="name" rules={[{

                    required:true,
                    message:"please input your full name!"

                  }]}>
                  <Input placeholder='Enter your full name'/>
                </Form.Item>
            
              </Form>
       </Flex>
       {/* image create */}
       <Flex>

       </Flex>
     </Flex>
   </Card>
  )
}

export default Register
