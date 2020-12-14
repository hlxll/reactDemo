import React, {Component} from 'react'; 
import './App.css'; 
import echarts from 'echarts'; 
import geoJson from './hainan.json';
 import {geoCoordMap} from "./geo";

class Hainan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zhuzi: {
                backgroundColor: 'rgba(0,0,0,0)',
                width: '1400px',
                backgroundImage: `url(./img/china.jpg)`,
                backgroundSize: '1400px 600px',
                height: '600px',
                position: 'fixed',
                top: 0
            }
        }
    }
    componentDidMount() {
        this.initalECharts();
        let yuanHeight = 10
        var dataArr = [
            {
                x: 860,
                y: 490,
                yuanHeight: 1100
            },
            {
                x: 1000,
                y: 620,
                yuanHeight: 500
            }
        ]
        let closeTimeOut = setInterval(()=>{
            this.initCanvas( dataArr, 'rgb(255, 255, 0)', 'rgb(255, 215, 0)', '7000', 'rgb(255, 193, 37)', 'rgba(255, 255, 0, 0.2)', yuanHeight)
            if(yuanHeight>=100){
                clearInterval(closeTimeOut)
            }
            yuanHeight +=10
        },100)
    }
    initCanvas=(dataArr , allHeightColor, allColor, textContent, betweenColor, CanvaOpacity, yuanHeight)=>{
            //画图地址， 坐标， 中间小圆颜色， 外部大空心圆颜色， 内容（不用了）， 两个圆中间宫格颜色，  外部矩形颜色，  内部小柱子颜色，  圆柱高度
            var yuanzhu = document.querySelector('canvas').getContext('2d')
            yuanzhu.clearRect(0,0,1800,1000)
            for(let i=0; i<dataArr.length; i++){
                var Xwidth = dataArr[i].x
                var Yheight = dataArr[i].y
                var maxHeight = dataArr[i].yuanHeight//圆柱高度

                var textContent = yuanHeight*maxHeight/100//文字内容,通过圆柱高度设置
                //根据高度设置颜色问题
                if(textContent>=1000){
                    allHeightColor = 'rgb(0, 255, 0)'
                    allColor = 'rgb(0, 255, 0)'
                    betweenColor = 'rgb(0, 205, 0)'
                    CanvaOpacity = 'rgba(0, 255, 0, 0.2)'
                }

                //var Xwidth = x//水平坐标
                //var Yheight = y//垂直坐标
                //大矩形
                yuanzhu.fillStyle = CanvaOpacity;
                yuanzhu.fillRect(Xwidth+30,Yheight,-60,-yuanHeight*maxHeight/1000);//115
                // ================
                //下大椭圆
                yuanzhu.scale(1, 1/2)
                yuanzhu.fillStyle = allColor
                yuanzhu.beginPath();
                yuanzhu.arc(Xwidth, Yheight*2, 30, 0, Math.PI*2, true)
                yuanzhu.shadowOffsetY=5;
                yuanzhu.shadowColor= allColor;
                yuanzhu.closePath();
                yuanzhu.fill()
                yuanzhu.scale(1, 2)
                // ==============
                // 矩形
                yuanzhu.fillStyle = CanvaOpacity;
                yuanzhu.fillRect(Xwidth+15,Yheight,-30,-yuanHeight*maxHeight/1000);//85
                //上大椭圆
                yuanzhu.scale(1, 1/2)
                yuanzhu.fillStyle = allColor
                yuanzhu.beginPath();
                yuanzhu.arc(Xwidth, -yuanHeight*maxHeight/500+2*Yheight, 30, 0, Math.PI*2, true)
                yuanzhu.closePath();
                yuanzhu.fill()
                
                //上小椭圆

                yuanzhu.fillStyle = allHeightColor
                yuanzhu.beginPath();
                yuanzhu.arc(Xwidth, -yuanHeight*maxHeight/500+2*Yheight, 15, 0, Math.PI*2, true);
                yuanzhu.shadowOffsetY=0;
                yuanzhu.lineWidth=15;
                yuanzhu.strokeStyle= betweenColor;
                yuanzhu.stroke();//画空心圆
                yuanzhu.closePath();
                yuanzhu.fill()
                yuanzhu.scale(1, 2)
                //下小椭圆
                yuanzhu.fillStyle = allHeightColor
                yuanzhu.scale(1, 1/2)
                yuanzhu.beginPath();
                yuanzhu.arc(Xwidth, 2*Yheight-5, 15, 0, Math.PI*2, true)
                yuanzhu.shadowOffsetY=0;
                yuanzhu.lineWidth=15;
                yuanzhu.strokeStyle= betweenColor;
                yuanzhu.stroke();
                yuanzhu.closePath();
                yuanzhu.fill()
                yuanzhu.scale(1, 2)

                //菱形
                var grd2=yuanzhu.createLinearGradient(Xwidth,-yuanHeight*maxHeight/1000+Yheight-35,Xwidth,40);
                if(textContent<=1000){
                    grd2.addColorStop(0, 'rgba(255, 255, 0, 0.7)');
                    grd2.addColorStop(1, 'rgba(255, 255, 0, 0.2)');
                }else{
                    grd2.addColorStop(0, 'rgba(0, 255, 0, 0.7)');
                    grd2.addColorStop(0, 'rgba(0, 255, 0, 0.2)')
                }
                yuanzhu.fillStyle = grd2
                yuanzhu.moveTo(Xwidth-17,Yheight-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth-22,Yheight-50-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth+22,Yheight-50-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth+17,Yheight-yuanHeight*maxHeight/1000);
                yuanzhu.fill()
                yuanzhu.beginPath();
                yuanzhu.strokeStyle = 'rgba(0, 0, 0, 0)';
                yuanzhu.lineWidth=1;
                yuanzhu.shadowBlur=0;
                yuanzhu.shadowOffsetY=0;
                var grd=yuanzhu.createLinearGradient(Xwidth,-yuanHeight*maxHeight/1000+Yheight-35,Xwidth,40);
                if(textContent<=1000){    
                    grd.addColorStop(0, 'rgba(255, 255, 0, 0.6)');
                    grd.addColorStop(1,"rgba(255, 255, 0, 0.2)");
                    yuanzhu.fillStyle= grd;
                }else{
                    grd.addColorStop(0, 'rgba(0, 255, 0, 0.6)');
                    grd.addColorStop(1,"rgba(0, 255, 0, 0.2)");
                    yuanzhu.fillStyle= grd;
                }
                yuanzhu.moveTo(Xwidth-13,Yheight-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth-30,Yheight-40-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth+30,Yheight-40-yuanHeight*maxHeight/1000);
                yuanzhu.lineTo(Xwidth+13,Yheight-yuanHeight*maxHeight/1000);
                yuanzhu.closePath();
                yuanzhu.fill()
                yuanzhu.stroke();
                yuanzhu.strokeStyle = 'red';
                yuanzhu.font="20px Arial";
                var FontXwidth = 0
                if(textContent<=999){
                    FontXwidth = Xwidth - 15
                }else{
                    FontXwidth = Xwidth - 25
                }
                yuanzhu.strokeText(textContent,FontXwidth, -yuanHeight*maxHeight/1000+Yheight-70);
            }
        
    }
    initalECharts() {
        const provienceData = [
            {name: '海口市', area: 'pink', type: 'areaCenterCity'},
            {name: '三亚市', area: 'green', type: 'areaCenterCity'},
            {name: '文昌市', area: 'blue', type: 'areaCenterCity'},
            {name: '定安县', area: 'green', type: 'areaCenterCity'},
            {name: '琼海市', area: 'pink', type: 'areaCenterCity'},
            {name: '万宁市', area: 'blue', type: 'areaCenterCity'},
            {name: '屯昌县', area: 'yellow', type: 'areaCenterCity'},
            {name: '澄迈县', area: 'blue', type: 'areaCenterCity'},
            {name: '儋州市', area: 'yellow', type: 'areaCenterCity'},
            {name: '临高县', area: 'pink', type: 'areaCenterCity'},
            {name: '保亭黎族苗族自治县', area: 'pink', type: 'areaCenterCity'},
            {name: '白沙黎族自治县', area: 'pink', type: 'areaCenterCity'},
            {name: '琼中黎族苗族自治县', area: 'green', type: 'areaCenterCity'},
            {name: '陵水黎族自治县', area: 'yellow', type: 'areaCenterCity'},
            {name: '乐东黎族自治县', area: 'blue', type: 'areaCenterCity'},
            {name: '东方市', area: 'yellow', type: 'areaCenterCity'},
            {name: '昌江黎族自治县', area: 'green', type: 'areaCenterCity'},
            {name: '五指山市', area: 'yellow', type: 'areaCenterCity'},
            {name: '三沙市', area: '东北大区', type: 'areaCenterCity'},
            {name: '西沙群岛', area: '东北大区', type: 'areaCenterCity'},
            {name: '南沙群岛', area: '东北大区', type: 'areaCenterCity'},
            {name: '中沙群岛', area: '东北大区', type: 'areaCenterCity'}
        ];
        /*for(let item of provienceData) {
            if (item.area === '1') {
                alert(1);
            }
        }*/
        echarts.registerMap('hainan', geoJson);
        for(let item of provienceData){
            if(item.area === 'blue'){
                item.itemStyle = {
                    normal: {
                        areaColor: "#0CE4E4",
                    },
                    emphasis: {
                        areaColor: "#0CE4E4",
                    }
                }
            }else if(item.area === 'pink'){
                item.itemStyle = {
                    normal: {
                        areaColor: "#F4C3CB",
                    },
                    emphasis: {
                        areaColor: "#F4C3CB",
                    }
                }
            }else if(item.area === 'green'){
                item.itemStyle = {
                    normal: {
                        areaColor: "#8EF48E",
                    },
                    emphasis: {
                        areaColor: "#8EF48E",
                    }
                }
            }else if(item.area === 'yellow'){
                item.itemStyle = {
                    normal: {
                        areaColor: "#F7F7B5",
                    },
                    emphasis: {
                        areaColor: "#F7F7B5",
                    }
                }
            }else {
                item.itemStyle = {
                    normal: {
                        areaColor: "red",
                    },
                    emphasis: {
                        areaColor: "red",
                    }
                }
            }

        }
        //初始化ECharts实例
        const myChart = echarts.init(document.getElementById('mainMap'));
        myChart.setOption({
            geo: {
                map: 'hainan',
                roam: false,
                zoom: 1.2,
                tooltip: {
                    show: false,       //不显示提示标签
                },
                label: {
                    normal: {
                        show: false,//显示省份标签
                        textStyle:{color:"#c71585"}//省份标签字体颜色
                    },
                    emphasis: {//对应的鼠标悬浮效果
                        show: false,
                        textStyle:{color:"#800080"}
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: .5,//区域边框宽度
                        borderColor: '#fff',//区域边框颜色
                        areaColor:"#ffefd5",//区域颜色
                        label:{show:false}
                    },
                    emphasis: {
                        show: false,
                        borderWidth: .5,
                        borderColor: '#4b0082',
                        areaColor: "#ffdead",
                    }
                },
            },
            series: [
                {
                    type: 'scatter',  //'line'（折线图） | 'bar'（柱状图） | 'scatter'（散点图） | 'k'（K线图）
                    //'pie'（饼图） | 'radar'（雷达图） | 'chord'（和弦图） | 'force'（力导向布局图） | 'map'（地图）
                    coordinateSystem: 'geo',
                    data: this.convertData(provienceData),
                    symbolSize: 10,
                    symbolRotate: 40,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'bottom',
                            show: true
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    tooltip: {
                        show: false,       //不显示提示标签
                        formatter: '{c}',      //提示标签格式
                        backgroundColor: "#fff",//提示标签背景颜色
                        borderColor: '#ccc',
                        borderWidth: 5,
                        textStyle:{color:"#000"} //提示标签字体颜色
                    },
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    }
                },
                {
                    type: 'map',
                    mapType: 'hainan',
                    roam: false,
                    zoom: 1.2,
                    tooltip: {
                        show: false,       //不显示提示标签
                    },
                    label: {
                        normal: {
                            show: false    //显示省份标签
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        //正常样式
                        normal: {
                            borderWidth: .2,      //区域边框宽度
                            borderColor: '#fff',  //区域边框颜色
                            label:{show:false}
                        },
                        //鼠标事件区块样式
                        emphasis: {
                            show: false,
                        }
                    },
                    data: provienceData
                }
            ],
        });

        myChart.on('click',function (params) {
            alert(params.name);
            /*const { dispatch } = this.props;
            dispatch({
                type: 'overview/select',
                payload: params.name,
            })*/
        });
    }


    convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].area),
                    area: data[i].area,
                    type: data[i].type,
                });
            }
        }
        console.log(res);
        return res;
    }

    render() {
        return (
            <div className="App" style={this.state.zhuzi}>
                <div id="mainMap" style={{width:'100vm',height:'90vh'}} ></div>
                <div className="yuanzhu1" ref="BarCanvas">
                    <canvas width="600" height="600"></canvas>
                </div>
            </div>
        );
    }
}

export default Hainan;