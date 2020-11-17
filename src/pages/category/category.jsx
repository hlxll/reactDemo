import React,{ Component } from "react";
import './category.less'
import {Card, Button, Table, Modal} from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons';
class Category extends Component{
  state = {
    dataSource: [],
    childDataSource: [],
    visible: false,
    addVisible: false,
    parent: true,
    childTitle: ''
  }
  getDataSource =()=>{
    //后期改为ajax请求得到数据
    this.setState({
      dataSource: [
        {
          key: '1',
          name: '徐玲玲',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '黄林',
          age: 42,
          address: '西湖区湖底公园1号',
        }
      ],
      childDataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        }
      ]
    })
    
  }
  toChild =(text)=>{
    this.setState({
      parent: false,
      childTitle: '一级分类列表->'+text.name
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
    const childExtra = (<Button onClick={()=>{this.setState({parent: true})}}><PlusOutlined />返回</Button>)
    let cardTemplate;
    if (this.state.parent) {
      cardTemplate = (
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table dataSource={this.state.dataSource} columns={this.columns} />
        </Card>
      )
    }else{
      cardTemplate = (
        <Card title={this.state.childTitle} extra={childExtra} style={{ width: '100%' }}>
          <Table dataSource={this.state.childDataSource} columns={this.childColumns} />
        </Card>
      )
    }
    return(
      <div>
        {cardTemplate}
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
          <p>添加</p>
        </Modal>
      </div>
    )
  }
}
export default Category;
