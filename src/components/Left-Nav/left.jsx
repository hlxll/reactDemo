import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import menuList from '../../route/index'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import log from '../../assets/image/tu.jpg'
import './index.less'
class Left extends Component{
    handleClick = (e) =>{
        console.log(e)
    }
    // 根据menuList数据生成标签
    getMenuNodes = (menuList) =>{
        return menuList.map((item)=>{
            if(item.children){
                return(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
                
            }
        })
    }
    //reduce未理解
    getMenuNodes_reducer = (menuList) =>{
        return menuList.reduce((pre, item) => {
            if(item.children){
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes_reducer(item.children)
                        }
                    </SubMenu>
                ))
            }else{
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            }


            return pre
        }, [])
    }
    render(){
        const Ownpath = this.props.location.pathname;
        return(
            <div>
                <Link to="/" className="left-nav">
                    <header className="left-nav-header">
                        <img src={log}/>
                        <span></span>
                    </header>

                </Link>
                {/* selectedKeys是变化的，根据Ownpath变化定义的 */}
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={[Ownpath]}
                    selectedKeys={[Ownpath]}
                    mode="inline"
                >

                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>
            </div>
        )
    }
}
// withRouter高阶组件，会向组件传递三个属性，location，match，history
export default withRouter(Left)