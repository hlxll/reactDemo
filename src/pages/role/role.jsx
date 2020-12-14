import React,{ Component } from "react";
import {
  Card,
  Button,
  Table,
  Pagination,
  Input,
  Form,
  Modal,
  message
} from 'antd'
import {reqRegister,queryQuanxian,addqueryQuanxian} from '../../api/index'
class Role extends Component{
  constructor(){
    super()
    this.state = {
      setQuanxian: false,
      quanxian: true,
      jurisdiction: true,
      column: [],
      columnData: [],
      current: 3,
      addUSerDialog: false
    }
    this.initCloumn = this.initCloumn.bind(this)
    this.initData = this.initData.bind(this)
  }
  initCloumn =()=>{
    this.setState({
      column:[
        {
          title: '角色名称',
          dataIndex: 'name'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime'
        },
        {
          title: '授权时间',
          dataIndex: 'authTime'
        },
        {
          title: '授权人',
          dataIndex: 'authPeople'
        }
      ]
    })
  }
  initData =async()=>{
    const res = await queryQuanxian()
    console.log(res.data)
    let columnDa = []
    res.data.forEach((ele,index)=>{
      columnDa.push({
        key: 1,
        name: res.data[index].username,
        createTime: '2020',
        authTime: '2020-01',
        authPeople: 'huanglin'
      } )
    })
    this.setState({
      columnData: columnDa
  })
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
  createaddUSer=()=>{
    this.setState({
      addUSerDialog: true
    })
    this.initData()
  }
  onregister=async (value)=>{
    const {username} = value
    const res = await reqRegister(username, 'password')
    console.log(res)
    if(res.data == 'ok'){
        message.info('注册成功')
    }
    this.setState({
      addUSerDialog: false
    })
  }
  
  componentWillMount(){
    this.initCloumn()
  }
  componentDidMount(){
    let self = this
    this.initData()
    console.log(localStorage.getItem('name'))
    queryQuanxian().then(res=>{
      console.log(res.data)
      res.data.forEach(ele=>{
        console.log(ele.username)
        if(ele.username == localStorage.getItem('name')){
          self.setState({
            quanxian: false
          })
        }
      })
    })
  }
  setQuanxian=()=>{
    this.setState({
      setQuanxian: true
    })
  }
  addGuanliyuan=async(value)=>{
    const {username} = value
    let res = await addqueryQuanxian(username)
    message.info('设置成功')
    this.setState({
      setQuanxian: false
    })
    this.initData()
  }
  render(){
    const title = (
      <span>
        <Button disabled={this.state.quanxian} onClick={this.createaddUSer}>创建角色</Button>
        <Button disabled={this.state.quanxian} onClick={this.setQuanxian}>设置角色权限</Button>
      </span>
    )
    return(
      <div>
          <Card title={title}>
            <Table dataSource={this.state.columnData} columns={this.state.column}></Table>
            <Pagination current={this.state.current} onChange={this.onChange} total={50} />
          </Card>
          <Modal
            title="添加管理员权限"
            visible={this.state.setQuanxian}

          >
            <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.addGuanliyuan}
                        onFinishFailed={this.addGuanliyuanFailed}
                    >
                        <Form.Item
                        label="username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
          </Modal>
          <Modal
            title="管理员添加用户"
            visible={this.state.addUSerDialog}

          >
            <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onregister}
                        onFinishFailed={this.onregisterFailed}
                    >
                        <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
          </Modal>
      </div>
    )
  }
}
export default Role;
