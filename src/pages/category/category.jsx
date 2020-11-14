import React,{ Component } from "react";
import './category.less'
import {Card, Button, Table, Modal} from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons';
class Category extends Component{
  state = {
    dataSource: [],
    visible: false,
    addVisible: false
  }
  openUpdate =(item)=>{
    console.log(item)
    this.setState({
      visible: true
    })
  }
  handleOk = ()=>{
    this.setState({
      visible: false
    })
  }
  handleCancel =()=>{
    this.setState({
      visible: false
    })
  }
  addHandleOk =()=>{
    this.setState({
      addVisible: false
    })
  }
  addHandleCancel =()=>{
    this.setState({
      addVisible: false
    })
  }
  initTable =()=>{
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, Card)=>(
          <div>
            {/* 如果想传参数，需要用回调函数，不能直接传参 */}
            <Button onClick={()=>this.openUpdate(text)}>修改</Button>
            <Button>子分类</Button>
          </div>
        )
      }
    ];
  }
  getDataSource =()=>{
    //后期改为ajax请求得到数据
    this.setState({
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
        {
          key: '3',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
        {
          key: '4',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
        {
          key: '5',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ]
    })
    
  }
  // 为render准备数据
  componentWillMount (){
    this.initTable()
  }
  // 发起请求
  componentDidMount (){
    this.getDataSource()
  }
  render(){
    const title = '一级分类列表'
    const extra = (<Button onClick={()=>{this.setState({addVisible: true})}}><PlusOutlined />添加</Button>)
    return(
      <div>
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table dataSource={this.state.dataSource} columns={this.columns} />
        </Card>
        <Modal
          title="修改"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input />
        </Modal>
        <Modal
          title="添加"
          visible={this.state.addVisible}
          onOk={this.addHandleOk}
          onCancel={this.addHandleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
export default Category;
