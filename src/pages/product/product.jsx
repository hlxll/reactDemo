import React,{ Component, Profiler } from "react";
import { Route, Switch} from 'react-router-dom'

import Detail from './detail'
import ProductHome from './productHome'
import AddUpdate from "./addUpdate";

class Product extends Component{
  ProfilerCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
    //Profiler组件用来检测内部组件渲染的事件的效率，回调函数显示渲染效果
    console.log(id)
    console.log(phase)
    console.log(actualDuration)
    console.log(baseDuration)
    console.log(startTime)
    console.log(commitTime)
    console.log(interactions)
  }
  render(){
    return(
      <div>
        <Profiler id="firstProfiler" onRender={this.ProfilerCallback}>
          <Switch>
            {/* 因为/product/addupdate默认是从/product里面找addupdate,加一个exact精准匹配，就不会在里面找了 */}
            <Route path='/product' exact component={ProductHome}/>
            <Route path='/product/addupdate' component={AddUpdate}/>
            <Route path='/product/detail' component={Detail}/>
          </Switch>
        </Profiler>
      </div>
    )
  }
}
export default Product;
