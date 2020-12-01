import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import './head.less'
class Head extends Component{
    render(){
        return(
            <div className="head">
                <div className="top">
                    <span>首页</span>
                    <div>
                        <span>欢迎! 黄林</span>
                        <img alt=""/>
                        <Button><Link to="/login">退出</Link></Button>
                    </div>
                    
                </div>
                <div>
                    <span>天气</span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Head