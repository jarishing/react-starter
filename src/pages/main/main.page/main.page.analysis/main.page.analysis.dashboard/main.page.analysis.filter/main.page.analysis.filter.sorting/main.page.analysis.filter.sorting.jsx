import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled           from 'styled-components';
import onClickOutside from "react-onclickoutside";

import { Icon } from 'antd';

import * as menuAction  from '../../../../../../../reducers/menu/action';
import Menu             from '../../../../../../../components/menu/menu.entry';
import MenuTag          from '../../../../../../../constant/menu/menu';
import SortingType      from '../../../../../../../constant/menu/menu.sorting';

class AnalysisPageFilterSorting extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    handleClickOutside = evt => {
        if(this.props.show){
            this.props.closeMenu();
        }
    };

    render(evt){
        return(
            <SortingButton>
                <div className="sortingWrapper" onClick={() => this.props.setMenu( MenuTag.SORTING )}>
                    <div className="sortingTitle">
                        Sort
                    </div>
                    <div className="sortingDropdownMenuWrapper">
                        <div className="sortingDropdownButtonWrapper">
                        {
                            this.props.sortingType == SortingType.DEFAULT?
                                <div className="sortingDropdownButton">
                                    <Icon type="star-o" />
                                    <div className="sortingDropdownButtonTitle">
                                        New
                                    </div>
                                </div>:
                            this.props.sortingType == SortingType.POPULAR?
                                <div className="sortingDropdownButton">
                                    <Icon type="rocket" />
                                    <div className="sortingDropdownButtonTitle">
                                        Popular
                                    </div>
                                </div>:
                            this.props.sortingType == SortingType.LIKED?
                                <div className="sortingDropdownButton">
                                    <Icon type="like-o" />
                                    <div className="sortingDropdownButtonTitle">
                                        Liked
                                    </div>
                                </div>:
                                <div className="sortingDropdownButton">
                                    <Icon type="smile-o" />
                                    <div className="sortingDropdownButtonTitle">
                                        Enjoy
                                    </div>
                                </div>
                        }
                            <Icon type="caret-down" />
                        </div>
                    </div>
                </div>
                {
                    this.props.show?
                    <Menu/>:null
                }
            </SortingButton>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    tag                 : state.menuReducer.menuTag,
    show                : state.menuReducer.menuShow,
    sortingType         : state.menuReducer.sortingType
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setMenu             : ( menuType ) => dispatch( menuAction.setMenu( menuType )),
    closeMenu           : () => dispatch( menuAction.closeMenu() ),
});

export default connect( mapStateToProps, mapDispatchToProps )(onClickOutside(AnalysisPageFilterSorting));

const SortingButton = styled.div`
    align-self: center;

    &> .sortingWrapper{
        display: flex;
        cursor: pointer;

        &> .sortingTitle{
            font-size: 12px;
            letter-spacing: 0.5px;
            line-height: 12px;
            margin-top: 1px;
            align-self: center;
        }

        &> .sortingDropdownMenuWrapper{
            align-self: center;
            margin-left: 6px;

            &> .sortingDropdownButtonWrapper{
                display: flex;

                &> .sortingDropdownButton{
                    display: flex;

                    &> .anticon{
                        align-self: center;
                        font-size: 18px;
                        color: #158FD8;
                    }
                    
                    &> .sortingDropdownButtonTitle{
                        min-width: 75px;
                        text-align: center;
                        padding: 0 5px;
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                        line-height: 12px;
                        text-transform: uppercase;
                        margin-top: 1px;
                        align-self: center;
                        color: #158FD8;
                    }
                }

                &> .sortingDropdownButton:active{
                    background-color: #E1EFF9;
                }

                &> .anticon{
                    font-size: 11px;
                    color: #158FD8;
                    margin-top: 3px;
                }
            }
        }
    }

    &> .sortingWrapper:hover Menu{
        display: block;
    }
`