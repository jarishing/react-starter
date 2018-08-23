import React            from 'react';
import styled           from 'styled-components';

import { Divider, Icon }      from 'antd';
import _                    from 'lodash';

import AnalyzedDataType     from '../../../../../../constant/analyst/analyst.analyzed.datatype';

import './style.css';

export default( props ) => {

    return (
        <Overview>
            {
                _.isEmpty(props.data)?
                <div className="analysis-overview-loader">
                    <Icon type="loading" />
                </div>:
                <div className="analysis-overview-wrapper">
                    <div className="analysis-overview-top-wrapper">
                        {    
                            props.analyzedDataType ===  "RESULTS"?
                            <div className="analysis-overview-item" onClick={() => props.setAnalyzedDataType(AnalyzedDataType.RESULTS)}>
                                <div className="analysis-overview-item-header--selected">
                                    <Icon type="area-chart" />
                                </div>
                                <div className="analysis-overview-item-content--selected">
                                    {props.data.totalCount}
                                </div>
                                <div className="analysis-overview-item-titie--selected">
                                    results
                                </div>
                            </div>:
                            <div className="analysis-overview-item" onClick={() => props.setAnalyzedDataType(AnalyzedDataType.RESULTS)}>
                                <div className="analysis-overview-item-header">
                                    <Icon type="area-chart" />
                                </div>
                                <div className="analysis-overview-item-content">
                                    {props.data.totalCount}
                                </div>
                                <div className="analysis-overview-item-titie">
                                    results
                                </div>
                            </div>
                        }
                        <div className="analysis-overview-item">
                            <div className="analysis-overview-item-header">
                                <Icon type="heart" />
                            </div>
                            <div className="analysis-overview-item-content">
                                -
                            </div>
                            <div className="analysis-overview-item-titie">
                                media likes
                            </div>
                        </div>
                        <div className="analysis-overview-item-last">
                            <div className="analysis-overview-item-header">
                                <Icon type="like-o" />
                            </div>
                            <div className="analysis-overview-item-content">
                                -<span className="analysis-overview-item-content-addtion">( - %)</span>
                            </div>
                            <div className="analysis-overview-item-titie">
                                positive mentions
                            </div>
                        </div>
                    </div>
                    <div className="analysis-overview-bottom-wrapper">
                        {
                            props.analyzedDataType ===  "SOURCES"?
                            <div className="analysis-overview-item" onClick={() => props.setAnalyzedDataType(AnalyzedDataType.SOURCES)}>
                                <div className="analysis-overview-item-header--selected">
                                    <Icon type="share-alt" />
                                </div>
                                <div className="analysis-overview-item-content--selected">
                                    {_.size(props.data.countBySource)}
                                </div>
                                <div className="analysis-overview-item-titie--selected">
                                    sources
                                </div>
                            </div>:
                            <div className="analysis-overview-item" onClick={() => props.setAnalyzedDataType(AnalyzedDataType.SOURCES)}>
                                <div className="analysis-overview-item-header">
                                    <Icon type="share-alt" />
                                </div>
                                <div className="analysis-overview-item-content">
                                    {_.size(props.data.countBySource)}
                                </div>
                                <div className="analysis-overview-item-titie">
                                    sources
                                </div>
                            </div>
                        }
                        <div className="analysis-overview-item">
                            <div className="analysis-overview-item-header">
                                <Icon type="message" />
                            </div>
                            <div className="analysis-overview-item-content">
                                -
                            </div>
                            <div className="analysis-overview-item-titie">
                                comments
                            </div>
                        </div>
                        <div className="analysis-overview-item-last">
                            <div className="analysis-overview-item-header">
                                <Icon type="bars" />
                            </div>
                            <div className="analysis-overview-item-content">
                                -
                            </div>
                            <div className="analysis-overview-item-titie">
                                most of mentions
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Overview>
    )
};

const Overview = styled.div`
    width: 600px;
    height: 300px;
    background-color: white;
    margin-top: 20px;

    &> .analysis-overview-wrapper .analysis-overview-top-wrapper .analysis-overview-item .analysis-overview-item-header .anticon{
        font-size: 14px;
        color: #595959;
    }

    &> .analysis-overview-wrapper .analysis-overview-top-wrapper .analysis-overview-item .analysis-overview-item-header--selected .anticon{
        font-size: 14px;
        color: #158FD8;
    }

    &> .analysis-overview-wrapper .analysis-overview-top-wrapper .analysis-overview-item-last .analysis-overview-item-header .anticon{
        font-size: 14px;
        color: #595959;
    }

    &> .analysis-overview-wrapper .analysis-overview-bottom-wrapper .analysis-overview-item .analysis-overview-item-header .anticon{
        font-size: 14px;
        color: #595959;
    }

    &> .analysis-overview-wrapper .analysis-overview-bottom-wrapper .analysis-overview-item .analysis-overview-item-header--selected .anticon{
        font-size: 14px;
        color: #158FD8;
    }


    &> .analysis-overview-wrapper .analysis-overview-bottom-wrapper .analysis-overview-item-last .analysis-overview-item-header .anticon{
        font-size: 14px;
        color: #595959;
    }

    &> .analysis-overview-loader .anticon{
        font-size: 40px;
        color: #158FD8;
    }
`
