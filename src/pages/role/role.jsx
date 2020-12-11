import React,{ Component } from "react";
import {
  Card,
  Button,
  Table,
  Pagination
} from 'antd'
class Role extends Component{
  constructor(){
    super()
    this.state = {
      jurisdiction: true,
      column: [],
      columnData: [],
      current: 3
    }
    this.initCloumn = this.initCloumn.bind(this)
    this.initData = this.initData.bind(this)
  }
  initCloumn =()=>{
    this.setState({
      column:[
        {
          title: '角色名称',
          dataIndex: 'name'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime'
        },
        {
          title: '授权时间',
          dataIndex: 'authTime'
        },
        {
          title: '授权人',
          dataIndex: 'authPeople'
        }
      ]
    })
  }
  initData =()=>{
    this.setState({
      columnData: [
        {
          key: 1,
          name: '黄林',
          createTime: '2020',
          authTime: '2020-01',
          authPeople: '黄林'
        } 
      ]
  })
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
  componentWillMount(){
    this.initCloumn()
  }
  componentDidMount(){
    this.initData()
  }
  render(){
    const title = (
      <span>
        <Button>创建角色</Button>
        <Button disabled={this.state.jurisdiction}>设置角色权限</Button>
      </span>
    )
    return(
      <div>
          <Card title={title}>
            <Table dataSource={this.state.columnData} columns={this.state.column}></Table>
            <Pagination current={this.state.current} onChange={this.onChange} total={50} />
          </Card>
      </div>
    )
  }
}
export default Role;
