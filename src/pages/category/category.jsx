import React,{ Component } from "react";
import './category.less'
import {Card, Button, Table, Space} from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons';
class Category extends Component{

  constructor(props){
    super(props)
    this.showLine = this.showLine.bind(this)
  }
  showLine = (text) =>{
    console.log(text)
  }
  render(){
    const title = '一级分类列表'
    const extra = (<Button><PlusOutlined />添加</Button>)
    const dataSource = [
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
    ];
    const columns = [
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
        render: (text, record) =>{
          <Space size="middle">
            <Button>详细</Button>
            <Button onClick={this.showLine(text)}>操作</Button>
          </Space>
        }
      }
    ];
    return(
      <div className="category">
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    )
  }
}
export default Category;
