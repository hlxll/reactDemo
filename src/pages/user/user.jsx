import React,{ Component } from "react";
import {Tooltip, Table, Button, Tabs} from 'antd'
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
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          quanx: '管理员'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          quanx: '普通用户'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          quanx: '普通用户'
        },
      ],
      data2 : [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          quanx: '管理员'
        }
      ],
      data3 : [
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          quanx: '普通用户'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          quanx: '普通用户'
        }
      ],
    }
  }
  callback=()=>{

  }
  render(){
    return(
      <div>
        <div className="addUser">
          <input placeholder="用户名"/>
          <input placeholder="权限"/>
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
