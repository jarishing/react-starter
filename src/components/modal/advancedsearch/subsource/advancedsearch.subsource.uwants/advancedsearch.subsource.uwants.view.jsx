import React    from 'react';
import styled   from 'styled-components';
import _        from 'lodash';

import { Checkbox, Icon, Divider, Input}  from 'antd';

export default( props ) => {

    const suffix = props.query.keyword ? <Icon type="close-circle" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.keywordClear()}/> : null;

    return (
        props.sourceList1? 
        (
        <SubsourceList>
            <div className="indicator">
                <Icon type="caret-down" />
            </div>
            <div className="header">
                <Input
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onChange={ event => props.filterSubsource(event.target.value) }
                    value={ props.query.keyword }
                    suffix={suffix}
                />
                <div className="subsourceAllSection">
                    <Checkbox
                        onChange={ props.onAllSelected }
                        checked={ props.query.checkAll }
                    />
                    <div className="subsourceTitle" onClick={() => console.log(props)}>
                        <p>ALL</p>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="subsourceListContainer">
                    <div className="subsourceListColumn">
                        {
                            props.sourceList1.map((item, index) =>(
                                <div className="subsourceItemWrapper" key={index}>
                                    <div className="subsourceItem">
                                        <Checkbox
                                            checked={ props.source.indexOf(item) > -1}
                                            onChange={ () => props.onSubsourceSelected( item ) }
                                        />
                                        <div className="subsourceTitle">
                                            <p>{item.split('_')[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Divider type="vertical" />
                    <div className="subsourceListColumn">
                        {
                            props.sourceList2.map((item, index) =>(
                                <div className="subsourceItemWrapper" key={index}>
                                    <div className="subsourceItem">
                                        <Checkbox
                                            checked={ props.source.indexOf(item) > -1}
                                            onChange={ () => props.onSubsourceSelected( item ) }
                                        />
                                        <div className="subsourceTitle">
                                            <p>{item.split('_')[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Divider type="vertical" />
                    <div className="subsourceListColumn">
                        {
                            props.sourceList3.map((item, index) =>(
                                <div className="subsourceItemWrapper" key={index}>
                                    <div className="subsourceItem">
                                        <Checkbox
                                            checked={ props.source.indexOf(item) > -1}
                                            onChange={ () => props.onSubsourceSelected( item ) }
                                        />
                                        <div className="subsourceTitle">
                                            <p>{item.split('_')[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Divider type="vertical" />
                    <div className="subsourceListColumn">
                        {
                            props.sourceList4.map((item, index) =>(
                                <div className="subsourceItemWrapper" key={index}>
                                    <div className="subsourceItem">
                                        <Checkbox
                                            checked={ props.source.indexOf(item) > -1}
                                            onChange={ () => props.onSubsourceSelected( item ) }
                                        />
                                        <div className="subsourceTitle">
                                            <p>{item.split('_')[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SubsourceList>
        ):
        null
    )
};

const SubsourceList = styled.div`
    &> .indicator{
        height: 20px;
        width: 100%;

        &> .anticon{
            padding-left: 716px;
            font-size: 18px;
        }
    }

    &> .header{
        padding: 10px 0px;
        display: flex;
        justify-content: space-evenly;

        &> .ant-input-affix-wrapper{
            width: 456px;
        }

        &> .subsourceAllSection{
            display: flex;
            align-self: center;
            padding-right: 39px;

            &> .subsourceTitle{
                font-size: 13px;
                align-self: center;
                padding: 2px 10px 1px;

                &> p{
                    margin-bottom: 0;
                }
            }
        }
    }

    &> .body{
        height: 112px;
        overflow-y: scroll;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            margin:5px 0 5px 0;
        }

        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 4px;
            border-radius: 4px;
            background: rgb(219,219,219);
        }

        &> .subsourceListContainer{
            display: flex;

            &> .subsourceListColumn{
                width: 24%;

                &> .subsourceItemWrapper{
                    padding-left: 1px;

                    &> .subsourceItem{
                        display: flex;
                        padding-bottom: 3px;

                        &> .subsourceTitle{
                            font-size: 13px;
                            align-self: center;
                            padding: 2px 10px 1px;
                            min-height: 40px;
    
                            &> p{
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }

            &> .ant-divider-vertical{
                height: auto;
            }
        }
    }
`