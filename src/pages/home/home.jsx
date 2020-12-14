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
import { Row,Col } from "antd";
class Home extends Component{
  constructor(prop){
    super(prop)
    this.state = {
      detailData:''
    }
  }
  componentDidMount(){
    var data1 = [[20,30,55,70,80,120,200],[15,30,45,60,80,100,150],[10,20,25,40,60,70,80]]
    var data2 = [[20,30,55,70,80,120,200],[15,30,45,60,80,100,150],[10,20,25,40,60,70,80]]
    var data3 = [[20,30,55,70,80,120,200],[15,30,45,60,80,100,150],[10,20,25,40,60,70,80]]
    var myChart1 = echarts.init(document.getElementById('oneEchart'))
    var myChart2 = echarts.init(document.getElementById('twoEchart'))
    var myChart3 = echarts.init(document.getElementById('threeEchart'))
    myChart1.setOption({
      title:{
        text:'种类趋势图'
      },
      legend:{
        data:['书本','食物','家具']
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
          name:'书本',
          type:'bar',
          data:data1[0]
        },{
          name:'食物',
          type:'bar',
          data:data1[1]
        },{
          name:'家具',
          type:'bar',
          data:data1[2]
        }
      ]
  })
    myChart2.setOption({
      title:{
        text:'数量趋势图'
      },
      legend:{
        data:['书本','食物','家具']
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
          name:'书本',
          type:'bar',
          data:data2[0]
        },{
          name:'食物',
          type:'bar',
          data:data2[1]
        },{
          name:'家具',
          type:'bar',
          data:data2[2]
        }
      ]
  })
    myChart3.setOption({
      title:{
        text:'价格趋势图'
      },
      legend:{
        data:['书本','食物','家具']
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
          name:'书本',
          type:'bar',
          data:data3[0]
        },{
          name:'食物',
          type:'bar',
          data:data3[1]
        },{
          name:'家具',
          type:'bar',
          data:data3[2]
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
  openDetil(item){
    // this.setState({
    //   detailData: ''
    // })
  }
  render(){
    const Hoc = this.HocCom(HocComponent)
    return(
      <div className="home">
        <div className="threeEcharts">
          <Row>
            <Col span={8}> <div id="oneEchart" style={{ width: 400, height: 400 }}></div></Col>
            <Col span={8}><div id="twoEchart" style={{ width: 400, height: 400 }}></div></Col>
            <Col span={8}><div id="threeEchart" style={{ width: 400, height: 400 }}></div></Col>
          </Row>
        </div>
        <div className="homeMain">
          <Row>
            <Col span={8}>
              <div className="homeMainChild">
            <div className="autoDiv">
            <div className="homeImg1"></div>
            <div className="Rightmain">
              <p>书本</p>
              <p className="link" onClick={this.openDetil('1')}>书本的详细信息</p>
              <p>作者：黄林</p>
            </div>
            </div>
          </div>
            </Col>
            <Col span={8}>
              <div className="homeMainChild">
            <div className="autoDiv">
            <div className="homeImg2"></div>
            <div className="Rightmain">
              <p>食物</p>
              <p className="link" onClick={this.openDetil('2')}>食物的详细信息</p>
              <p>供给：钉钉买菜</p>
            </div>
            </div>
          </div>
            </Col>
            <Col span={8}>
              <div className="homeMainChild">
            <div className="autoDiv">
            <div className="homeImg3"></div>
            <div className="Rightmain">
              <p>家具</p>
              <p className="link" onClick={this.openDetil('3')}>家具的详细信息</p>
              <p>供给：宜家</p>
            </div>
            </div>
          </div>
            </Col>
          </Row>
          
          
          
        </div>
        <Hoc />
      </div>
    )
  }
}
export default Home;
