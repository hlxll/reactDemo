import React,{ Component } from "react";
import './category.less'
import {Card, Button, Table, Modal, message} from 'antd'
import { Form, Input, Checkbox } from 'antd';
import {addCategoryPar, queryCategoryPar, queryChildCategoryPar,updateChildCategory} from '../../api/index'
import {
  PlusOutlined
} from '@ant-design/icons';
class Category extends Component{
  state = {
    childUpdateName: '',
    dataSource: [],
    childDataSource: [],
    visible: false,
    addVisible: false,
    parent: true,
    childTitle: '',
    columns: [],
    childColumns: [],
    childNum: 1,
    oneChildren: [],
    twoChildren: []
  }
  openUpdate =(item)=>{
    console.log(item.name)
    // let res = await updateChildCategory()
    this.setState({
      childUpdateName :item.name
    })
    this.setState({
      visible: true
    })
  }
  parentHandleOk=()=>{
    
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
        dataIndex: 'money',
        key: 'money',
      },
      {
        title: '剩余数量',
        dataIndex: 'num',
        key: 'num',
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
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '种类数量',
        dataIndex: 'num',
        key: 'num',
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
            <Button onClick={()=>this.toChild(text)}>子分类</Button>
          </div>
        )
      }]
    })
  }
  getDataSource =async()=>{
    //后期改为ajax请求得到数据
    let dataSource1 = await queryCategoryPar()
    console.log(dataSource1)
    this.setState({
      dataSource: dataSource1.data,
    })
    this.setState({
      oneChildren: [{
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
      }],
      twoChildren: [
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
      ],
      childDataSource: []
    })
    
  }
  toChild = async(text)=>{
    console.log(text)
    this.setState({
      childNum: text.key
    })
    this.setState({
      childDataSource: []
    })
    let children = ''
    if(text.type == '生活用品'){
      let Childdata = await queryChildCategoryPar(1)
      children = Childdata.data
    }else{
      let Childdata = await queryChildCategoryPar(2)
      children = await Childdata.data
    }
    this.setState({
      childDataSource: children
    })
    this.setState({
      parent: false,
      childTitle: '一级分类列表->'+text.type
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
   onFinish = async(values) => {
    console.log()
    let {name, money} = values
    let res = await updateChildCategory(name, money)
    this.setState({
      visible: false
    })
  };

   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  addParentCategory= async (value)=>{
    const {type, num, address} = value
    const res = await addCategoryPar(type, num, address)
    if(res.data == 'ok'){
      message.info('添加成功')
    }
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
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="name"
              name="name"
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
              label="money"
              name="money"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="添加"
          visible={this.state.addVisible}
          onOk={this.addHandleOk}
          onCancel={this.addHandleCancel}
        >
          <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.addParentCategory}
                        onFinishFailed={this.addParentCategoryFailed}
                    >
                        <Form.Item
                        label="type"
                        name="type"
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
                        label="num"
                        name="num"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>
                
                        <Form.Item
                        label="address"
                        name="address"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your address!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>
                
                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                        
        </Modal>
      </div>
    )
  }
}
export default Category;