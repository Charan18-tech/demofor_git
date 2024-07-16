import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, TimePicker, Select, } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
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

const onFinish = (values) => {
  console.log(values);
};
const Component1 = () => {
    const { Option } = Select;
  return(
      <>
      <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label="Date of Birth">
        <DatePicker />
      </Form.Item>

    <Form.Item label="Time of Birth">
    <TimePicker />
    </Form.Item>

    <Form.Item label="Place of Birth">
    <Input />
    </Form.Item>

    <Form.Item label="Rashi">
    <Select>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
    </Select>
    </Form.Item> 

    <Form.Item label="Nakshtatra">
    <Select>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
      <Option></Option>
    </Select>
    </Form.Item> 

    <Form.Item label="Complexion">
        <Select>
            <Option>Very Fair</Option>
            <Option>Fair</Option>
            <Option>Medium</Option>
            <Option>Brown</Option>
            <Option>Dark</Option>
        </Select>
    </Form.Item>

    <Form.Item label="Height">
      <Select>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
      </Select>
    </Form.Item>

    <Form.Item label="Education">
      <Input/>
    </Form.Item>

    <Form.Item label="Religion/Caste">
      <Input/>
    </Form.Item>

    <Form.Item label="Job/Occupation">
      <TextArea/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
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
};
export default Component1;