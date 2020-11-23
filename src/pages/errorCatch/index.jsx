import React, { Component } from 'react'

class ErrorCatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }
    // componentDidCatch(error, errorInfo) {
    //     // 你同样可以将错误日志上报给服务器
    //     logErrorToMyService(error, errorInfo);
    // }
    render(){
        if(this.state.hasError){
            return <h1>错误边界</h1>
        }
        return this.props.children
    }
}
export default ErrorCatch