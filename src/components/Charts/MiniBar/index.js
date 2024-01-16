import React, { Component } from 'react'
import autoHeight from '../autoHeight';
import styles from '../index.less';
const echarts = require('echarts');

@autoHeight()
export default class Area extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.loadEchartsArea()
    }
    loadEchartsArea = () => {
        const { keys, data, chartColor } = this.props
        const echartsId = '#' + keys + 'area'
        const time = [];
        const num = [];
        data.map( (val,idx) => {
            num.push(val.y);
            time.push(val.x)
        });
        // 1.创建实例对象
        const myEcharts1 = echarts.init(document.querySelector(echartsId));
        // 2. options配置项
        const option = {
            grid: {
                        left: '0%', // 调整左边距
                        right: '0%', // 调整右边距
                    },
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            xAxis: {
                type: 'category',
                show: false,
                data: time,
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [{
                type: 'bar',
                data: num,
                itemStyle: {
                    normal: {
                        color: chartColor || '#975FE4'
                    }
                }
            }]
        }
        // 3. 配置项和数据给实例化对象
        myEcharts1.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener('resize', function () {
            // 让我们的图表调用 resize这个方法
            myEcharts1.resize();
        });
    };
    render() {
        const { height, keys } = this.props;
        const chartHeight = height + 54;
        return (
            <div className={styles.miniChart} style={{ height }}>
                <div id={keys + 'area'} className={styles.chartArea} style={{ width: '100%', height: chartHeight }} />
            </div>
        )
    }
}