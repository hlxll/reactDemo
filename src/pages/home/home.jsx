import React,{ Component } from "react"
import './home.less'
import HocComponent from './common/HocComponent'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Carousel } from 'antd';
class Home extends Component{
  componentDidMount(){
    var data1 = [2000,3000,5500,7000,8000,12000,20000]
    var data2 = [1500,3000,4500,6000,8000,10000,15000]
    var data3 = [1000,2000,2500,4000,6000,7000,8000]
    var myChart1 = echarts.init(document.getElementById('oneEcharts'))
    var myChart2 = echarts.init(document.getElementById('twoEcharts'))
    var myChart3 = echarts.init(document.getElementById('threeEcharts'))
    myChart1.setOption({
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
          data:data1
        },{
          name:'摩拜',
          type:'bar',
          data:data2
        },{
          name:'小蓝',
          type:'bar',
          data:data3
        }
      ]
  })
    myChart2.setOption({
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
    myChart3.setOption({
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
  HocCom(HComponent){
      return class extends Component {
        render(){
          return(
            <HComponent/>
          )
        }
      }
    }
  render(){
    const Hoc = this.HocCom(HocComponent)
    return(
      <div className="home">
        <div className="threeEcharts">
          <div id="oneEcharts" style={{ width: 400, height: 400 }}></div>
          <div id="twoEcharts" style={{ width: 400, height: 400 }}></div>
          <div id="threeEcharts" style={{ width: 400, height: 400 }}></div>
        </div>
        <div className="homeMain">
        <Carousel autoplay>
          <div>
            <div className="autoDiv">
            <div className="homeImg"></div>
              <div>
                <p>huanglin</p>
                <p>jiesaoizixsa</p>
                <p>200</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="autoDiv">
            <div className="homeImg"></div>
              <div>
                <p>huanglin</p>
                <p>jiesaoizixsa</p>
                <p>200</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="autoDiv">
            <div className="homeImg"></div>
              <div>
                <p>huanglin</p>
                <p>jiesaoizixsa</p>
                <p>200</p>
              </div>
            </div>
          </div>
        </Carousel>
        </div>
        <Hoc />
      </div>
    )
  }
}
export default Home;
