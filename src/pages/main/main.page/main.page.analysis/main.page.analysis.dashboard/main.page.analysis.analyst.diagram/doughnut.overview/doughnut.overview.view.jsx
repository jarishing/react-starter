import React                from 'react';
import styled               from 'styled-components';

import { Doughnut }         from 'react-chartjs-2';
import _                    from 'lodash';

import { Icon, Divider }    from 'antd';

import './style.css';


export default( props ) => {
    return (
        <DoughnutOverview>
            <div className="doughnut-overview-title">
                Source - Overview
            </div>
            <Divider/>
            {
                _.isEmpty(props.data)?
                <div className="doughnut-loader" onClick={() => console.log(props)}>
                    <Icon type="loading" />
                </div>:
                <div className="doughnut-overview-body-wrapper">
                    <div className="doughnut-overview-body">
                        <div className="doughnut-overview-container">
                            <Doughnut
                                data={props.getSources()}
                                options={{
                                        cutoutPercentage: 70,
                                        responsive: true,
                                        maintainAspectRatio: false
                                    }}
                                legend={{display:false}}/>
                        </div>
                    </div>
                    <div className="doughnut-overview-dataList-Warpper">
                        <div className="doughnut-overview-dataList">
                            {
                                props.legendLabel.map((item, index) => (
                                    <div className="doughnut-overview-dataList-legend" key={index}>
                                        <div className="doughnut-overview-dataList-legend-colorBlock" style={{backgroundColor: props.dataLabelsColor[index]}}/>
                                        <div className="doughnut-overview-dataList-title-Wrapper">
                                            {
                                                item == 'facebook'?
                                                    <Icon type="facebook" />:
                                                item == 'discuss'?
                                                    <Icon type="wechat" />:
                                                item == 'lihkg'?
                                                    <Icon type="smile-o" />:
                                                item == 'hkgolden'?
                                                    <Icon type="twitter" />:<Icon type="message" />
                                            }
                                            <div className="doughnut-overview-dataList-title">
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </DoughnutOverview>
    )
};

const DoughnutOverview = styled.div`

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .doughnut-loader .anticon{
        font-size: 40px;
        color: #158FD8;
    }

    &> .doughnut-overview-body-wrapper .doughnut-overview-dataList-Warpper .doughnut-overview-dataList .doughnut-overview-dataList-legend .doughnut-overview-dataList-title-Wrapper .anticon{
        font-size: 16px;
        margin-top: 2px;
    }

`