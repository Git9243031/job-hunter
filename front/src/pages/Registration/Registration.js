import React from 'react';
import { DatePicker, Form, Input, Button, Checkbox } from 'antd';
import { RegistrationStyled } from './Registration.styles';

const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const rangeConfig = {
  rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

const Registration = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <RegistrationStyled>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/* Vperyod */}{' '}
        <Form.Item
          label="Countrie"
          name="Countrie"
          rules={[
            {
              required: true,
              message: 'Please add your Countrie!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number"
          name="Number"
          rules={[
            {
              required: true,
              message: 'Please input your Number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="MainSkills"
          name="MainSkills"
          rules={[
            {
              required: true,
              message: 'Please add your MainSkills!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="AdditionalSkills"
          name="AdditionalSkills"
          rules={[
            {
              required: true,
              message: 'Please add your Additional Skills!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please add your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telegram"
          name="Telegram"
          rules={[
            {
              required: true,
              message: 'Please add your Telegram!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="GitHub"
          name="GitHub"
          rules={[
            {
              required: true,
              message: 'Please add your GitHub!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Education"
          name="Education"
          rules={[
            {
              message: 'Please add your Education!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
          <RangePicker />
        </Form.Item>
      </Form>
    </RegistrationStyled>
  );
};

export default Registration;
