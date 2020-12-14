import React, { Component } from 'react'
import echarts from 'echarts'

class Echart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // 挂载完成之后，因为React初始化echarts时长宽可能会获取到顶层，所以延迟200去生成，不影响视觉效果
  componentDidMount() {
    setTimeout(() => {
      this.initEchart(this.props.data)
    }, 200)
  }

  // 更新props以后调用
  componentWillReceiveProps(newProps) {
    this.initEchart(newProps.data)
  }

  initEchart = (data) => {
    let myEcharts = echarts.init(this.echartsBox)
    let option = {
      title: {
        text: this.props.title || '',
        left: 'center',
        top: '0'
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            show: false
          }
        },
        formatter: '{b}<br/>汇总：{c}',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
      },
      xAxis: {
        data: data.x,
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        name: this.props.yname,
        nameGap: 15,
        position: 'left',
        axisTick: {
          inside: true
        },
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [{
        name: '汇总',
        type: 'line',
        data: data.y,
        smooth: false,
        lineStyle: {
          color: '#00CC99',
          width: 2
        },
        itemStyle: {
          color: '#fff',
          borderColor: '#000'
        }
      }]
    }
    myEcharts.setOption(option)
    myEcharts.on('finished', () => {
      myEcharts.resize()
    })
  }

  render() {
    return (
      <div ref={(c) => { this.echartsBox = c }} style={{ width: '100%', height: '100%' }} />
    )
  }
}

export default Echart