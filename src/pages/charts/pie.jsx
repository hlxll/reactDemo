import React, { Component } from 'react';
import { Row, Col, Carousel, Image } from 'antd'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';  //饼状图
import  'echarts/lib/component/tooltip';
import  'echarts/lib/component/title';
import  'echarts/lib/component/legend'
import  'echarts/lib/component/markPoint'
import './pie.css'

import LineEcharts from './zhexian'
class EchartsTest extends Component {
  constructor(){
    super()
    this.state = {
      contentStyle: {
        height: '20px',
        color: '#fff',
        lineHeight: '20px',
        textAlign: 'center',
        background: '#364d79',
      },
      leftImg: {
        backgroundSize: "100px 100px", 
        width: "100px",
        height: "100px"
      },
      data: {
	      x: ['床', '被子', '柜子', '桌子', '凳子', '化妆椅'],
	      y: [20, 50, 80, 70, 45, 85]
	    }
    }
  }
  componentDidMount() {
    //环形图百分比
    var huan_val = document.getElementsByClassName("huan")[0];
    var chart = echarts.init(huan_val);
    let option = {
        color: ["#f8e367", "#99dfff", "#58c0f0", "#5ea6ff", "#ff9e48", "#bcbcbc"],
        series: [{
            name: "家具分析",
            type: "pie",
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 33,
                name: '床'
            }, {
                value: 26,
                name: '被子'
            }, {
                value: 6,
                name: '柜子'
            }, {
                value: 2,
                name: '桌子'
            }, {
                value: 3,
                name: '凳子'
            }, {
                value: 30,
                name: '化妆椅'
            }]
        }]
    };
    chart.setOption(option);
}
    render() {
        return (
          <div>
            <Row>
              <Col span={12}>
                <div className="huan" id="pie" style={{ width: 400, height: 400, }}></div>
              </Col>
              <Col span={12}>
                <div className="huanRight">
                  <div className="huanRightTitle">
                    家具用品
                  </div>
                  <div>
                  <Carousel autoplay>
                    <div>
                    <div style={this.state.leftImg}></div>
                      <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/chuang.jpg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            床
                          </h3>
                          <span>
                            床是每个人休息的地方，床分为很多种，这里主要是床占很大比例
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <div style={this.state.leftImg}></div>
                    <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/beizi.jpg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            被子
                          </h3>
                          <span>
                            被子分为很多不同的材质，不同被子有不同的保暖功效
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <div style={this.state.leftImg}></div>
                    <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/guizi.jpeg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            柜子
                          </h3>
                          <span>
                            柜子经过多年的改进，现在的柜子五花八门，多姿多彩
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <div style={this.state.leftImg}></div>
                    <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/zhuozi.jpeg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            桌子
                          </h3>
                          <span>
                            桌子的材料不同，价格不同，而且不同桌子的高低和花样也是不同
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <div style={this.state.leftImg}></div>
                    <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/dengzi.jpg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            凳子
                          </h3>
                          <span>
                            凳子现在不同的地方用，有上学的硬板凳，办公室的沙发登
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <div style={this.state.leftImg}></div>
                    <Row>
                        <Col>
                          <Image
                            width={200}
                            src="./img/huazhuang.jpg"
                          />
                        </Col>
                        <Col>
                          <h3 style={this.state.contentStyle}>
                            化妆椅
                          </h3>
                          <span>
                            化妆柜子可能是每个女孩子都喜欢的东西，每个女孩的房间都是喜欢放一条吧
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Carousel>
                  </div>
                </div>
              </Col>
            </Row>
                <div style={{height: 200}}>
                  <LineEcharts data={this.state.data} yname="单位：件" /> 
                </div>
          </div>
        );
    }
}

export default EchartsTest;