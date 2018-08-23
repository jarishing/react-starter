import React                from 'react';
import styled               from 'styled-components';

import { Doughnut }         from 'react-chartjs-2';
import _                    from 'lodash';

import { Icon, Divider }    from 'antd';

import './style.css';

export default( props ) => {
    return (
        <DoughnutSubsource>
            <div className="doughnut-subsource-title">
                Source - Detail
            </div>
            <Divider/>
            {
                _.isEmpty(props.data)?
                <div className="doughnut-loader">
                    <Icon type="loading" />
                </div>:
                <div className="doughnut-subsource-body-wrapper">
                    <div className="doughnut-subsource-body">
                        <div className="doughnut-subsource-container">
                            {
                                props.loading?
                                null:
                                <Doughnut
                                data={props.getSources()}
                                options={{tooltips: {
                                            callbacks: {
                                                label: function(tooltipItem, data) {
                                                    var label = data.labels[tooltipItem.index];

                                                    if (label) {
                                                        label += ' : ';
                                                    }

                                                    let total = _.sum(data.datasets[0].data);
                                                    
                                                    label += Math.round(((data.datasets[0].data[tooltipItem.index]/total)* 100)*10)/10 + "%"
                                                    return label;
                                                }
                                            }
                                        },
                                        cutoutPercentage: 70,
                                        responsive: true,
                                        maintainAspectRatio: false
                                    }}
                                legend={{display:false}}/>
                            }
                        </div>
                    </div>
                    <div className="doughnut-subsource-dataList-Warpper">
                        <div className="doughnut-subsource-dataList">
                        {
                            props.legendLabel.map((item, index) => (
                                <div className="doughnut-subsource-dataList-legend" key={index}>
                                    <div className="doughnut-subsource-dataList-legend-colorBlock" style={{backgroundColor: props.dataLabelsColor[index]}}/>
                                    <div className="doughnut-subsource-dataList-title-Wrapper">
                                        {
                                            item.split('_')[0] == 'facebook'?
                                                <Icon type="facebook" />:
                                            item.split('_')[0] == 'discuss'?
                                                <Icon type="wechat" />:
                                            item.split('_')[0] == 'lihkg'?
                                                <Icon type="smile-o" />:
                                            item.split('_')[0] == 'hkgolden'?
                                                <Icon type="twitter" />:
                                            item.split('_')[0] == 'uwants'?
                                                <Icon type="message" />:<Icon type="global" />
                                        }
                                        <div className="doughnut-subsource-dataList-title">
                                            {item.split('_')[1]}
                                        </div>
                                    </div>
                                    <div className="doughnut-subsource-dataList-data">
                                        {props.legendData[index]}
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            }
        </DoughnutSubsource>
    )
};

const DoughnutSubsource = styled.div`

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .doughnut-loader .anticon{
        font-size: 40px;
        color: #158FD8;
    }

    &> .doughnut-subsource-body-wrapper .doughnut-subsource-dataList-Warpper .doughnut-subsource-dataList .doughnut-subsource-dataList-legend .doughnut-subsource-dataList-title-Wrapper .anticon{
        font-size: 16px;
        margin-top: 2px;
    }
`