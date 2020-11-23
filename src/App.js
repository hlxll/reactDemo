// 应用的根组件
import React, { Component, Suspense } from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
// import Login from './pages/login/login'
// import Admin from './pages/admin/admin'

import { Provider } from 'react-redux'
import store from './store/reducer'
//如果要把redux和react连接，要使用provide，把redux传入react项目中
//在组件中需要使用react-redux的connect，想高阶组件一样，连接redux和react

// 代码分割还可以在路由中设置，使用Suspense和lazy
//lazy只支持默认导出的组件，export default，如果想命名导出，可以在组件外面套一个默认导出的组件
const Login = React.lazy(() => import('./pages/login/login'));
const Admin = React.lazy(() => import('./pages/admin/admin'));

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    {/* 这里Suspense在switch中使用，不能包裹其中的一个，另外一个会显示不了 */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/" component={Admin}></Route>
                            <Redirect to="/"/>
                        </Switch>
                    </Suspense>
                </Router>
            </Provider>
        )
    }
}