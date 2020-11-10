import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import { Menu } from 'antd';
const { SubMenu } = Menu;
import log from '../../assets/image/tu.jpg'
import './index.less'
export default class Left extends Component{
    handleClick = (e) =>{
        console.log(e)
    }
    render(){
        return(
            <div>
                <Link to="/" className="left-nav">
                    <header className="left-nav-header">
                        <img src={log}/>
                        <span></span>
                    </header>

                </Link>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1">
                        <Link to="/home">
                            <Icon type="pie-chart"/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail"/>
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Link to="/category">
                                <Icon type="pie-chart"/>
                                <span>品类管理</span>
                            </Link>
                            
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/product">
                                <Icon type="pie-chart"/>
                                <span>商品管理</span>
                            </Link>
                            
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link to="/user">
                            <Icon type="pie-chart"/>
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/role">
                            <Icon type="pie-chart"/>
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}