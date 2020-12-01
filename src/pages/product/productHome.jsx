import React,{ Component } from "react";
import { Link } from 'react-router-dom'
import {
    Card,
    Button,
    Input,
    Table,
    Space
  } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './css/productHome.less'
import { Modal, Form } from 'antd'
export default class ProductHome extends Component{
    constructor(props){
        super(props)
        this.addProduct = this.addProduct.bind(this)
        this.state = {
            dataSource: [
                {
                    key: 1,
                    name: '汽车',
                    money: 12000
                }
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '价格',
                    dataIndex: 'money',
                    key: 'money',
                    render: (text, index)=>{
                        return '$'+text;
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, index)=>(
                        <div>
                            <Button><Link to="/product/detail">详情</Link></Button>
                            <Button>修改</Button>
                        </div>
                    )
                }
            ],
            showAddUpdate: false
        }
    }
    addProduct =()=>{
        this.setState({showAddUpdate: false})
    }
    render(){
        return(
            <div className="productHome">
                <Card>
                    <div className="headAddInput">
                        <Space>
                            <Input placeholder="请输入姓名"/>
                            <Input placeholder="请输入价格"/>
                            <Button onClick={()=>this.setState({showAddUpdate: true})}><PlusOutlined />添加</Button>
                        </Space>
                    </div>
                    <div>
                    <Table key="_id" dataSource={this.state.dataSource} columns={this.state.columns} />
                    </div>
                </Card>
                <Modal
                    title="添加"
                    visible={this.state.showAddUpdate}
                    onCancel={()=>this.setState({showAddUpdate: false})}
                    onOk={this.addProduct}
                >
                    <Form>
                        <Form.Item label="name" name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input name'
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item label="muchMoney" name="muchMoney"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input monenNum'
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item>
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
