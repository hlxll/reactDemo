// 应用的根组件
import React,{Component} from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

//如果要把redux和react连接，要使用provide，把redux传入react项目中
//在组件中需要使用react-redux的connect，想高阶组件一样，连接redux和react
export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        )
    }
}