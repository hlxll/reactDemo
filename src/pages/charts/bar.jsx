import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div id="bar" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default Echarts;