import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Icon} from 'antd';

// import View from './media.list.view';
import Model from './function.list.mode';
import styled from 'styled-components';

import * as sidebarAction from '../../../reducers/sidebar/action';
import sidebarTag from '../../../constant/sidebar';

class FunctionList extends Component {

    constructor(props){
        super(props);
        this.state = {}
        this.model = Model.bind(this)();
    }

    render(){
        return(
            this.props.sidebarShow ?
                null:   
                <Bar>
                    <ul className="functionBarList">
                        <li className="functionBarFilter" onClick={() => this.props.setSidebar(sidebarTag.FILTER, true)}>
                            <Icon type="filter" />
                        </li>
                        <li className="functionBarTag">
                            <Icon type="tag" />
                        </li>
                        <li className="functionBarDashboard" >
                            <Icon type="pie-chart" />
                        </li>
                        <li className="functionBarSetting">
                            <Icon type="setting" />
                        </li>
                    </ul>
                </Bar>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    sidebarShow: state.sidebarReducer.sidebarShow
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setSidebar: (sidebarType, show) => dispatch( sidebarAction.openSideBar(sidebarType,show) )
});

export default connect( mapStateToProps, mapDispatchToProps )(FunctionList);

const Bar = styled.div`
    position: fixed;
    top: 25vh;

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
            width: 50px;
            height: 50px;
            background-color: #FF4500;
            display: flex;
            align-items: center;
            justify-content: center;

            &> .anticon-tag{
                font-size: 22px;
                color: white;
            }
        }

        &> .functionBarDashboard{
            width: 50px;
            height: 50px;
            background-color: #0fb36c;
            display: flex;
            align-items: center;
            justify-content: center;

            &> .anticon-pie-chart{
                font-size: 22px;
                color: white;
            }
        }

        &> .functionBarSetting{
            width: 50px;
            height: 50px;
            background-color: #ce1a19;
            display: flex;
            align-items: center;
            justify-content: center;

            &> .anticon-setting{
                font-size: 22px;
                color: white;
            }
        }
    }
`