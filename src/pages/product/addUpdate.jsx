import React,{ Component } from "react";
import { Button, Modal } from 'antd';
export default class AddUpdate extends Component{
  render(){
    return(
      <div>
          <Modal
            title="添加"
            visible="true"
          >
            <Button></Button>
          </Modal>
      </div>
    )
  }
}
