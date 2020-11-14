import React,{ Component } from "react";
import { Route, Switch} from 'react-router-dom'

import Detail from './detail'
import ProductHome from './productHome'
import AddUpdate from "./addUpdate";

class Product extends Component{
  render(){
    return(
      <div>
          <Switch>
            {/* 因为/product/addupdate默认是从/product里面找addupdate,加一个exact精准匹配，就不会在里面找了 */}
            <Route path='/product' exact component={ProductHome}/>
            <Route path='/product/addupdate' component={AddUpdate}/>
            <Route path='/product/detail' component={Detail}/>
          </Switch>
      </div>
    )
  }
}
export default Product;
