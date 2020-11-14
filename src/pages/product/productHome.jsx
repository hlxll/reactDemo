import React,{ Component } from "react";
import { Link } from 'react-router-dom'
import {
    Card,
    Button,
    Input,
    Table
  } from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
    export default class ProductHome extends Component{
    constructor(props){
        super(props)
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
            ]
        }
    }
    addProduct =()=>{
        console.log('添加')
    }
  render(){
    return(
      <div>
          <Card>
              <Input/>
              <Input/>
              <Button onClick={this.addProduct}><PlusOutlined />添加</Button>
              <div>
                <Table key="_id" dataSource={this.state.dataSource} columns={this.state.columns} />
              </div>
          </Card>
      </div>
    )
  }
}
