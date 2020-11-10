import React,{ Component } from "react";
import { Redirect, Route, Switch} from 'react-router-dom'
import memoryUnit from '../../utils/memoryUnit'

import Home from '../home/home'
import Category from '../category/category'
import Bar from '../charts/bar'
import Role from '../role/role'
import User from '../user/user'
import Product from '../product/product'
import Line from '../charts/line'
import Pie from '../charts/pie'
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
            <Content>
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/>
                <Route path='/role' component={Role}/>
                <Route path='/user' component={User}/>
                <Route path='/product' component={Product}/>
                <Route path='/charts/line' component={Line}/>
                <Route path='/charts/pie' component={Pie}/>
                <Route path='/charts/bar' component={Bar}/>
                <Redirect to='/home'/>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Admin;
