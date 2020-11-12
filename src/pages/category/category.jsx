import React,{ Component } from "react";
import './category.less'
import {Card, Button, Table} from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons';
class Category extends Component{
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
    ];
    return(
      <div>
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    )
  }
}
export default Category;
