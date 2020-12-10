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
    childTitle: '',
    columns: [],
    childColumns: []
  }
  openUpdate =(item)=>{
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
  //初始化表格列内容
  initTable =() =>{
    this.setState({
      childColumns: [{
        title: '名字',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '价格',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '剩余数量',
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
          </div>
        )
      }],
      columns: [{
        title: '类别',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '种类数量',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '厂家',
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
            <Button onClick={()=>this.toChild(text)}>子分类</Button>
          </div>
        )
      }]
    })
  }
  getDataSource =()=>{
    //后期改为ajax请求得到数据
    this.setState({
      dataSource: [
        {
          key: '1',
          name: '家具',
          age: 32,
          address: '宜家品牌',
          children: [
            {
              key: '1',
              name: '床',
              age: 32,
              address: 100,
            },
            {
              key: '2',
              name: '被子',
              age: 32,
              address: 200,
            }
          ]
        },
        {
          key: '2',
          name: '书本',
          age: 42,
          address: '新华书店',
          children: [
            {
              key: '1',
              name: '高数',
              age: 32,
              address: 56,
            },
            {
              key: '2',
              name: '英语',
              age: 32,
              address: 40,
            }
          ]
        }
      ],
      childDataSource: []
    })
    
  }
  toChild =(text)=>{
    console.log(text.children)
    this.setState({
      childDataSource: []
    })
    this.setState({
      childDataSource: text.children
    })
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
  addParent=()=>{
    this.setState({addVisible: true})

  }
  render(){
    const title = '一级分类列表'
    const extra = (<Button onClick={this.addParent}><PlusOutlined />添加</Button>)
    const childExtra = (<Button onClick={()=>{this.setState({parent: true})}}><PlusOutlined />返回</Button>)
    let cardTemplate;
    if (this.state.parent) {
      cardTemplate = (
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} />
        </Card>
      )
    }else{
      cardTemplate = (
        <Card title={this.state.childTitle} extra={childExtra} style={{ width: '100%' }}>
          <Table dataSource={this.state.childDataSource} columns={this.state.childColumns} />
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
          
        </Modal>
      </div>
    )
  }
}
export default Category;