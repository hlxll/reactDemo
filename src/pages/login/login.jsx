import React,{ Component } from "react";

import { Form, Input, Button, Checkbox } from 'antd';
export default class Login extends Component{
    constructor(){
        super()
        this.layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
        };
        this.tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)
    }
    onFinish = (value) =>{
        console.log(value)
    }
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render(){
        //组件使用form表单的高阶组件，form表单传入本组件form的功能
        return (
        <Form
            {...this.layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
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
    
            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <Form.Item {...this.tailLayout}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        );
    }
}
