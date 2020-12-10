import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class App extends React.Component{
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('line'));
      // 绘制图表
      myChart.setOption({
        title:{
          text:'商品数量趋势图'
        },
        legend:{
          data:['OFO','摩拜','小蓝']
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
            name:'OFO',
            type:'bar',
            data:[2000,3000,5500,7000,8000,12000,20000]
          },{
            name:'摩拜',
            type:'bar',
            data:[1500,3000,4500,6000,8000,10000,15000]
          },{
            name:'小蓝',
            type:'bar',
            data:[1000,2000,2500,4000,6000,7000,8000]
          }
        ]
    })
  }
  render(){
    return(
      <div>
        <div id="line" style={{ width: 400, height: 400 }}></div>
        <div id="pie" style={{ width: 400, height: 400 }}></div>
        <div id="bar" style={{ width: 400, height: 400 }}></div>
      </div>
      
    )
  }
}