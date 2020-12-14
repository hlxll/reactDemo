import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {Row, Col, Form, Input, Button} from 'antd'
import {queryEchartLine, updataLineEcharts, queryQuanxian} from '../../api/index'
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      quanxian: false
    }
  }
  componentDidMount() {
    let self = this
    this.initEcharts()
    queryQuanxian().then(res=>{
      console.log(res.data)
      res.data.forEach(ele=>{
        console.log(ele.username)
        console.log(localStorage.getItem('name'))
        if(ele.username == localStorage.getItem('name')){
          self.setState({
            quanxian: true
          })
        }
      })
    })
  }
  initEcharts=()=>{
    let dataName = []
    let dataOne = []
    let dataTwo = []
    let dataThree = []
    queryEchartLine().then(res=>{
      console.log(res.data)
      res.data.forEach(ele=>{
        dataName.push(ele.name)
        
      })
      res.data[0].num.split(',').forEach(ele=>{
        console.log()
        dataOne.push(ele)
      })
      res.data[1].num.split(',').forEach(ele=>{
        dataTwo.push(ele)
      })
      res.data[2].num.split(',').forEach(ele=>{
        dataThree.push(ele)
      })
      var myChart = echarts.init(document.getElementById('line'));
      // 绘制图表
      myChart.setOption({
        title:{
          text:'商品出售数量'
        },
        legend:{
          data:dataName//[]
        },
        tooltip:{   //展示数据
          trigger:'axis'
        },
        xAxis:{
          data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
          type:'value'
        },
        series:[
          {
            name:dataName[0],
            type:'bar',
            data:dataOne
          },{
            name:dataName[1],
            type:'bar',
            data:dataTwo
          },{
            name:dataName[2],
            type:'bar',
            data:dataThree
          }
        ]
    })
    })
  }
  onFinish=(value)=>{
    const {name, num} = value
    updataLineEcharts(name, num).then(res=>{
      console.log(res)
      this.initEcharts()
    })
  }
  onFinishFailed=()=>{

  }
  render(){
    return(
      <div>
        <Row>
          <Col span={12}>
          <div id="line" style={{ width: 400, height: 400 }}></div>
          </Col>
          {
            this.state.quanxian?
          
          <Col span={12}>
          <div>
            <p>柱状图配置</p>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="num"
                name="num"
                rules={[
                  {
                    required: true,
                    message: 'Please input your num!',
                  },
                ]}
              >
                <Input placeholder="输入8个数字，按逗号间隔"/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div>
            通过设置类别和数量，可对数据进行修改
          </div>
          </Col>
  :''
  }
        </Row>
        
      </div>
      
    )
  }
}