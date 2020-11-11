import React,{ Component } from "react";
import './category.less'
import {icon, Button, Table} from 'antd'
class Category extends Component{
  render(){
    return(
      <div>
          <div>
            <span>标题</span>
            <Button><icon type="mail"/>添加</Button>
          </div>
      </div>
    )
  }
}
export default Category;
