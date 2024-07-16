import React from "react";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
const Component3 = () => {
  return (
    <>
    <Form
    style={{
        maxWidth: 600,
    }}
    >
    <Form.Item label="Contact Number">
    <Input/>
    </Form.Item>

    <Form.Item label="Contact Address">
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
  );
};

export default Component3;
