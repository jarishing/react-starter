import React                from 'react';
import styled               from 'styled-components';

import { Icon, Divider }    from 'antd';
import { Line }             from 'react-chartjs-2';
import _                    from 'lodash';

import './style.css';

export default( props ) => {
    return (
        <LineSubsource>
            <div className="line-chart-subsource-title">
                Result - Detail
            </div>
            <Divider/>
                {
                    _.isEmpty(props.messageDate)?
                    <div className="line-chart-loader">
                        <Icon type="loading" />
                    </div>:
                    <div className="line-chart-subsource-container-wrapper">
                        <div className="line-chart-subsource-container">
                            <Line
                                data={props.messageDate}
                                legend={{display:false}}
                                options={{
                                    scales: {
                                        xAxes: [{
                                            scaleLabel: {
                                                display: true,
                                                labelString: '@ showing top 5 data only'
                                            },
                                            ticks: {
                                                autoSkip: true, 
                                                maxRotation: 0,
                                                minRotation: 0,
                                            }
                                        }],
                                        yAxes: [{
                                            scaleLabel: {
                                                display: true
                                            },
                                            ticks: {
                                                // stepSize: 0.5
                                                
                                            }
                                        }]
                                    },
                                    tooltips: {
                                        callbacks: {
                                            label: function(tooltipItem, data) {
                                                var label = data.datasets[tooltipItem.datasetIndex].label.split('_')[1];
                        
                                                if (label) {
                                                    label += ' : ';
                                                }
                        
                                                label += tooltipItem.yLabel;
                                                return label;
                                            }
                                        }
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>
                        <div className="line-chart-subsource-legend-list-wrapper">
                            <div className="line-chart-subsource-legend-list">
                                {
                                    props.legendLabel.map((item, index) => (
                                        <div className="line-chart-subsource-legend" key={index}>
                                            <div className="line-chart-subsource-legend-colorBlock" style={{backgroundColor: props.dataLabelsColor[index]}}/>
                                            <div className="line-chart-subsource-legend-title-Wrapper">
                                                {
                                                    item.split('_')[0] == 'facebook'?
                                                        <Icon type="facebook" />:
                                                    item.split('_')[0] == 'discuss'?
                                                        <Icon type="wechat" />:
                                                    item.split('_')[0] == 'lihkg'?
                                                        <Icon type="smile-o" />:
                                                    item.split('_')[0] == 'hkgolden'?
                                                        <Icon type="twitter" />:<Icon type="message" />
                                                }
                                                <div className="line-chart-subsource-legend-title">
                                                    {item.split('_')[1]}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
        </LineSubsource>
    )
};

const LineSubsource = styled.div`
    height: 333px;

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .line-chart-subsource-container-wrapper{
        display: flex;
    }

    &> .line-chart-loader .anticon{
        font-size: 40px;
        color: #158FD8;
    }

    &> .line-chart-subsource-legend-list-wrapper .line-chart-subsource-legend-list .line-chart-subsource-legend .line-chart-subsource-legend-title-Wrapper .anticon{
        font-size: 16px;
        margin-top: 2px;
    }
`

// legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',