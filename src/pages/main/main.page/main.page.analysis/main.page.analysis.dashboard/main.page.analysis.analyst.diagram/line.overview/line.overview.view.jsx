import React                from 'react';
import styled               from 'styled-components';

import { Icon,Divider }     from 'antd';
import { Line }             from 'react-chartjs-2';
import _                    from 'lodash';

import './style.css';

export default( props ) => {
    return (
        <LineOverview>
            <div className="line-chart-overview-title">
                Result - Overview
            </div>
            <Divider/>
            <div className="line-chart-overview-container">
                {
                    _.isEmpty(props.messageDate)?
                    <div className="line-chart-loader">
                        <Icon type="loading" />
                    </div>:
                    <Line
                        data={props.messageDate}
                        legend={{display:false}}
                        options={{
                            scales: {
                                xAxes: [{
                                    scaleLabel: {
                                        display: true
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
                                        var label = "Total Message Count";
                
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
                }
            </div>
        </LineOverview>
    )
};

const LineOverview = styled.div`

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .line-chart-overview-container .anticon{
        font-size: 40px;
        color: #158FD8;
    }
`