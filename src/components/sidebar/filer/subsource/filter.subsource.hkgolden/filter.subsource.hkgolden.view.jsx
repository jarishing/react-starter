import React            from 'react';
import styled           from 'styled-components';

import { Checkbox, Icon, Divider, Input}  from 'antd';

export default( props ) => {
    const suffix = props.query.keyword ? <Icon type="close-circle" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.keywordClear()}/> : null;

    return (
        <SubsourceList>
            <div className="tri"/>
            <div className="subsourceListWrapper">
            {
                props.subsourceList?
                    <div className="subsourceListContainer">
                        <div className="header">
                            <Checkbox
                                onChange={ props.onAllSelected }
                                checked={ props.query.checkAll }
                                >
                                All
                            </Checkbox>
                        </div>
                        <Divider/>
                        <Input
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={ event => props.filterSubsource(event.target.value) }
                            value={ props.query.keyword }
                            suffix={suffix}
                        />
                        <div className="body">
                        {
                            props.query.filterList.map((item, index) =>(
                                <div className="subsourceItemWrapper" key={index}>
                                    {
                                        <div className="subsourceItem">
                                            <Checkbox
                                                checked={ props.source.indexOf(item) > -1}
                                                onChange={ () => props.onSubsourceSelected( item ) }
                                            />
                                            <div className="subsourceTitle">
                                                <p>{item.split('_')[1]}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                        </div>
                    </div>: null
            }
            </div>
        </SubsourceList>
    )
};

// <div className="functionBar">
//                 <ul className="functionBarList">
//                     <li className="functionBarFilter" onClick={() => this.props.setSidebar(sidebarTag.FILTER, true)}>
//                         <Icon type="filter" />
//                     </li>
//                     <li className="functionBarTag">
//                         <Icon type="tag" />
//                     </li>
//                     <li className="functionBarDashboard" >
//                         <Icon type="pie-chart" />
//                     </li>
//                     <li className="functionBarSetting">
//                         <Icon type="setting" />
//                     </li>
//                 </ul>
//             </div>

const SubsourceList = styled.div`
    &> .tri {
        display: inline-block;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid white;
        position: fixed;
        left: 74px;
        top: calc(15vh + 315px);
    }

    &> .subsourceListWrapper{
        width: 250px;
        min-height: 400px;
        background-color: white;
        position:fixed;
        left: 94px;
        top: calc(15vh + 84px);

        &> .subsourceListContainer{
            padding: 14px;
            width: 250px;
            height: 400px;

            &> .header{
                margin-left: 1px;
                display: flex;
                justify-content: space-between;

                &> .inputWrapper{
                    width: 100px;
                    height: 20px;
                }

                &> a{
                    color: rgba(0, 0, 0, 0.65);
                }
            }

            &> .ant-divider-horizontal{
                margin: 8px 0;
            }

            &> .ant-input-affix-wrapper{
                margin-bottom: 10px;

                &> .ant-input{
                    border-radius: 1px;
                }
            }

            &> .body{
                height: 290px;
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
                    

                &> .subsourceItemWrapper{
                    margin: 0 1px 2px;

                    &> .subsourceItem{
                        display: flex;

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
            }
        }
    }

    &> .functionBar{
        position: fixed;
        top: 25vh;
        left: 344px;

        &> .functionBarList{
            list-style-type: none;
            padding: 0;

            &> .functionBarFilter{
                width: 50px;
                height: 50px;
                background-color: #158FD8;
                display: flex;
                align-items: center;
                justify-content: center;

                &> .anticon-filter{
                    font-size: 22px;
                    color: white;
                }
            }

            &> .functionBarTag{
                width: 12px;
                height: 50px;
                background-color: #FF4500;
                display: flex;
                align-items: center;
                justify-content: center;

                &> .anticon-tag{
                    font-size: 22px;
                    color: white;
                    display: none;
                }
            }

            &> .functionBarTag:hover{
                width: 50px;

                &> .anticon-tag{
                    display: unset;
                }
            }

            &> .functionBarDashboard{
                width: 12px;
                height: 50px;
                background-color: #0fb36c;
                display: flex;
                align-items: center;
                justify-content: center;

                &> .anticon-pie-chart{
                    font-size: 22px;
                    color: white;
                    display: none;
                }
            }

            &> .functionBarDashboard:hover{
                width: 50px;

                &> .anticon-pie-chart{
                    display: unset;
                }
            }

            &> .functionBarSetting{
                width: 12px;
                height: 50px;
                background-color: #ce1a19;
                display: flex;
                align-items: center;
                justify-content: center;

                &> .anticon-setting{
                    font-size: 22px;
                    color: white;
                    display: none;
                }
            }

            &> .functionBarSetting:hover{
                width: 50px;

                &> .anticon-setting{
                    display: unset;
                }
            }
        }
    }
`