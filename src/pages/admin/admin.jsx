import React,{ Component } from "react";
import { Redirect} from 'react-router-dom'
import memoryUnit from '../../utils/memoryUnit'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Admin extends Component{
  render(){
    const user = memoryUnit.user;
    console.log(user)
    //获取内存数据，在admin中使用
    if(!user){
      // user不存在，回到login
      return <Redirect to="/login"/>
    }
    return(
      <div>
        <Layout style={{height: '100%'}}>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Admin;