import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Divider, Icon } from 'antd';

import * as pageAction from '../../../reducers/page/action';
import * as analysisAction from '../../../reducers/analysis/action';

import Model        from './main.header.model';

import pageTag      from '../../../constant/page';
import logo         from '../../../assets/logo-black_word.png';

class MainHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.model = Model.bind(this)();
    }

    render(){
        return (
            <Nav>
                <div className="container">
                    <div className="logoContainer">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="pageButtonWrapper">
                        <div className="pageButtonContainer" onClick={() => this.props.setPage(pageTag.HOME)}>
                            {
                                this.props.tag === pageTag.HOME ?
                                <Icon type="home" style={{color: '#158FD8'}}/>:<Icon type="home" />
                            }
                        </div>
                        <Divider type="vertical" />
                        <div className="pageButtonContainer">
                            <Icon type="tag-o" />
                        </div>
                        <Divider type="vertical" />
                        <div className="pageButtonContainer" onClick={() => this.model.goToAnalysisPage()}>
                            {
                                this.props.tag === pageTag.ANALYSIS ?
                                <Icon type="line-chart" style={{color: '#158FD8'}}/>:<Icon type="line-chart" />
                            }
                        </div>
                        <Divider type="vertical" />
                        <div className="pageButtonContainer">
                            <Icon type="setting" />
                        </div>
                        <Divider type="vertical" />
                        <div className="pageButtonContainer">
                            <Icon type="logout" />
                        </div>
                    </div>
                </div>
            </Nav>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    tag                 : state.pageReducer.tag
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setPage             : pageType => dispatch( pageAction.setPage( pageType )),
    getDashboardDate    : () => dispatch( analysisAction.getDashboardDate( ))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

const Nav = styled.div`
    height: 56px;
    background-color: white;
    display: flex;

    &> .container{
        width: 1240px;
        margin: 0 auto;

        &> .logoContainer {
            width: 130px;
            height: 100%;
            display: flex;
            align-items:center;
            float: left;

            &> .logo {
                width: 130px;
                height: 30px;
            }
        }

        &> .pageButtonWrapper{
            float: right;
            height: 100%;
            display: flex;
            align-items: center;

            &> .pageButtonContainer{
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                &> .anticon{
                    font-size: 22px;
                }
            }

            &> .pageButtonContainer:hover{
                color: #158FD8;
            }

            &> .ant-divider-vertical{
                height: 20px;
            }
        }
    }
`