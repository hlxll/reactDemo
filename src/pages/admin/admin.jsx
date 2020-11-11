import React,{ Component } from "react";
import { HashRouter as Router,Redirect, Route, Switch} from 'react-router-dom'
// import memoryUnit from '../../utils/memoryUnit'

import './admin.less'
import Home from '../home/home.jsx'
import Category from '../category/category'
import Role from '../role/role'
import User from '../user/user'
import Product from '../product/product'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Bar from '../charts/bar'
import { Layout } from 'antd'
import LeftNav from '../../components/Left-Nav/left'
import Header from '../../components/Head/head'
const {  Footer, Sider, Content } = Layout;
class Admin extends Component{
  render(){
    // const user = memoryUnit.user;
    // console.log(user)
    //获取内存数据，在admin中使用
    // if(!user){
    //   // user不存在，回到login
    //   return <Redirect to="/login"/>
    // }
    return(
      <div className="admin" style={{height: '100%'}}>
        <Layout style={{height: '100%'}}>
          <Sider>
            <LeftNav/>
          </Sider>
          <Layout>
            <Header/>
            <Content>
              <Router>
                <Switch>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/category' component={Category}></Route>
                  <Route path='/role' component={Role}></Route>
                  <Route path='/user' component={User}></Route>
                  <Route path='/product' component={Product}></Route>
                  <Route path='/charts/line' component={Line}></Route>
                  <Route path='/charts/pie' component={Pie}></Route>
                  <Route path='/charts/bar' component={Bar}></Route>
                  <Redirect to='/home'/>
                </Switch>
              </Router>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Admin;
