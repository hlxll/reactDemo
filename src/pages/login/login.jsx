import React,{ Component } from "react";
import { Redirect} from 'react-router-dom'
import { Form, Input, Button, Checkbox, Tabs } from 'antd';
import { reqLogin, reqRegister } from '../../api/index'
import { message } from 'antd';
import memoryUnit from '../../utils/memoryUnit'
import storage from '../../utils/storage'
import { connect } from 'react-redux'
import './login.less'
import addCounter from '../../store/action/counter'
const { TabPane } = Tabs;
class Login extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
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
    componentDidMount() {
        this.props.dispatch(addCounter(1))
    }
    onFinish = async (value) =>{
        console.log(value)
        const {username, password} = value;
        const response = await reqLogin(username, password)
        //请求数据成功，跳转admin路由
        console.log(response)
        if(response.data.status == 0){
            localStorage.setItem('name', username)
            this.props.history.replace('/admin')
        }else{
            message.info('账号密码错误');
        }
        //将登录数据保存在内存中
        // memoryUnit.user = response.data.data.login || '';
        //保存数据到localstorage中,然后每次启动项目，会在index.js中获取local数据，看看有没有登录历史
        // storage.saveUser(response.data.data.login)
        // if(response.data && response.data.data.login === 'huanglin'){
        //     this.props.history.replace('/admin')
        // }
    }
    onregister=async (value)=>{
        const {username, password} = value
        const res = await reqRegister(username, password)
        console.log(res)
        if(res.data == 'ok'){
            message.info('注册成功')
        }
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render(){
        //如果已经登录，自动跳转admin页面
        const user = memoryUnit.user
        if(user && user === 'huanglin') {
            return <Redirect to="/admin"/>
        }
        //组件使用form表单的高阶组件，form表单传入本组件form的功能
        return (
            <div className="login">
                <div className="LoginLog">
                    <div className="logImage"></div>
                </div>
                <div className="loginForm">
                    <div className="FormTitle">
                        <span>欢迎登陆</span>
                    </div>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
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
                        </TabPane>
                        <TabPane tab="注册" key="2">
                        <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onregister}
                        onFinishFailed={this.onregisterFailed}
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
                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                        </TabPane>
                    </Tabs>
                    
                </div>
                
            </div>
        
        );
    }
}

const mapStateToProps = (state, props) =>{
    console.log(state)
    return{
        counter: state.counter
    }
}
export default connect(mapStateToProps)(Login)