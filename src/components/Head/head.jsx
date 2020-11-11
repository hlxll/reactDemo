import React, { Component } from 'react'
class Head extends Component{
    render(){
        return(
            <div>
                <div>
                    <span>首页</span>
                    <span>欢迎{}</span>
                    <img/>
                    <span>退出</span>
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