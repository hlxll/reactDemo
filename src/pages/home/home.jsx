import React,{ Component } from "react"
import './home.less'
class Home extends Component{
  render(){
    return(
      <div className="home">
          refs转发，将ref传入子组件，但是ref不会随props传递，在子组件中使用React.forwardRef((props, ref)接收两个参数，获取props和ref
          对于复用性很大的组件，需要控制子组件时候，可以考虑refs转发
      </div>
    )
  }
}
export default Home;
