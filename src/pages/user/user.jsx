import React,{ Component } from "react";
import {Tooltip, Table, Button, Tabs, Input, Form} from 'antd'
const { TabPane } = Tabs;
class User extends Component{
  constructor(){
    super()
    this.state = {
      columns : [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
          width: 150,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: {
            showTitle: false,
          },
          render: address => (
            <Tooltip placement="topLeft" title={address}>
              {address}
            </Tooltip>
          ),
        },
        {
          title: '权限',
          dataIndex: 'quanx',
          key: 'address 2',
          ellipsis: {
            showTitle: false,
          },
          render: address => (
            <Tooltip placement="topLeft" title={address}>
              {address}
            </Tooltip>
          ),
        },
        {
          title: '操作',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: {
            showTitle: false,
          },
          render: address => (
            <div>
              <Button>修改</Button>
              <Button>操作</Button>
            </div>
          ),
        },
      ],
      data : [
        {
          key: '1',
          name: 'huanglin',
          age: 32,
          address: '江西南昌',
          quanx: '管理员'
        },
        {
          key: '2',
          name: 'xulinlin',
          age: 42,
          address: '江西上饶',
          quanx: '普通用户'
        },
        {
          key: '3',
          name: 'laoshi',
          age: 32,
          address: '江西南昌',
          quanx: '普通用户'
        },
      ],
      data2 : [
        {
          key: '1',
          name: 'huanglin',
          age: 32,
          address: '江西南昌',
          quanx: '管理员'
        }
      ],
      data3 : [
        {
          key: '2',
          name: 'xulinlin',
          age: 42,
          address: '江西上饶',
          quanx: '普通用户'
        },
        {
          key: '3',
          name: 'laoshi',
          age: 32,
          address: '江西南昌',
          quanx: '普通用户'
        },
      ],
    }
  }
  callback=()=>{

  }
  onFinish=(res)=>{
    console.log(res)
  }
  onFinishFailed=()=>{

  }
  render(){
    return(
      <div>
        <div className="addUser">
          <Form
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
             label="version"
             name="version"
             rules={[
               {
                 required: true,
                 message: 'Please input your username!',
               },
             ]}
           >
             <Input />
           </Form.Item>
           <Form.Item>
                <Button type="primary" htmlType="submit">
                  添加用户
                </Button>
            </Form.Item>
           </Form>
        </div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="全部用户" key="1">
            <Table columns={this.state.columns} dataSource={this.state.data} />
          </TabPane>
          <TabPane tab="管理员" key="2">
            <Table columns={this.state.columns} dataSource={this.state.data2} />
          </TabPane>
          <TabPane tab="普通用户" key="3">
            <Table columns={this.state.columns} dataSource={this.state.data3} />
          </TabPane>
        </Tabs>
          
      </div>
    )
  }
}
export default User;
