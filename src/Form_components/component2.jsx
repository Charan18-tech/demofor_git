import React from 'react'
import { Form, Button, Input, } from 'antd'
import TextArea from 'antd/es/input/TextArea';
const Component2 = () => {
    const onFinish = (values) => {
        console.log(values);
      };
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  return (
    <>
      <Form
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Father Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label="Father's Occupation">
      <Input/>
    </Form.Item>

    <Form.Item label="Mother Name">
      <Input/>
    </Form.Item>

    <Form.Item label="Mother's Occupation">
    <Input />
    </Form.Item>

    <Form.Item label="Brother Name (Elder)">
    <Input/>
    </Form.Item> 

    <Form.Item label="Brother's Occupation (Elder)">
      <Input/>
    </Form.Item> 

    <Form.Item label="Sister Name (Elder)">
      <Input/>
    </Form.Item>

    <Form.Item label="Sister's Occupation">
        <Input/>
    </Form.Item>

    <Form.Item label="Sister Name (Younger)">
      <Input/>
    </Form.Item>

    <Form.Item label="Sister's Occupation (Younger)">
      <Input/>
    </Form.Item>

    <Form.Item label="Property">
      <TextArea/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default Component2