// 应用的根组件
import React,{Component} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/admin" exact component={Admin}></Route>
                    {/* <Redirect to="/admin"/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}