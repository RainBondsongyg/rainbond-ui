import React, { Component } from 'react'
const echarts = require('echarts');

export default class MonitorChart extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.loadMonitorEcharts()
    }
    loadMonitorEcharts = () => {
        const { keys, svalue, cname, chartTitle, data } = this.props
        console.log(data,'data')
        const echartsId = '#' + keys + 'Monitor'
        // 1.创建实例对象
        const myEcharts1 = echarts.init(document.querySelector(echartsId));
        // 2. options配置项
        const seriesArr = [];
        data.map((item, index) => {
            const seriesItem = {
                name: item.cid,
                type: 'line',
                data: item.value,
                symbolSize: 0.5,
                symbol: 'circle',
                yAxisIndex: 0,
                showSymbol: false,
                emphasis: {
                    focus: 'series',
                },
                lineStyle: {
                    width: 1,
                    shadowColor: 'rgba(158,135,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 15,
                },
                // itemStyle: {
                //     normal: {
                //         color: item.color,
                //         borderColor: item.color,
                //     },
                // },
            };
            seriesArr.push(seriesItem);
        })

        
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0,
                    },
                    lineStyle: {
                        width: 0,
                    },
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c',
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
            },
            grid: {
                top: '15%',
                y2: 88,
            },
            xAxis: {
                    type: 'category',
                    data: data.time,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#393939', //X轴文字颜色
                        }
                    },
                },
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#DCE2E8',
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#556677',
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                        },
                    },
                },
            ],
            series: seriesArr
        };

        // 3. 配置项和数据给实例化对象
        myEcharts1.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener('resize', function () {
            // 让我们的图表调用 resize这个方法
            myEcharts1.resize();
        });
    };
    render() {
        const { keys, swidth, sheight } = this.props
        return (
            <div id={keys + 'Monitor'} style={{ width: swidth, height: sheight }} />
        )
    }
}