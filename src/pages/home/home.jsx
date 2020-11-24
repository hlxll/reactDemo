import React,{ Component } from "react"
import './home.less'
class Home extends Component{
  render(){
    return(
      <div className="home">
        <p>refs转发</p>
        refs转发，将ref传入子组件，但是ref不会随props传递，在子组件中使用React.forwardRef((props, ref)接收两个参数，获取props和ref
        对于复用性很大的组件，需要控制子组件时候，可以考虑refs转发
        <p>fragment</p>
        使用React.fragment包裹组件，不会在外部形成div，比如特定的table内部的tr内部只能有td，就可以用这个
      </div>
    )
  }
}
export default Home;
