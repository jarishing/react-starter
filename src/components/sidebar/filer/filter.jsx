import React, {Component} from 'react';
import {connect} from 'react-redux';
import onClickOutside from "react-onclickoutside";

import * as sidebarAction from '../../../reducers/sidebar/action';
import * as searchAction from '../../../reducers/search/action';

import View from './filter.view';
import Model from './filter.model';

import SubsourceTag       from '../../../constant/subsource';

class FilterSideBar extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.model = Model.bind(this)();
    }

    handleClickOutside = evt => {
        this.props.setSubsourceList(SubsourceTag.DEFAULT, false);
        this.props.closeSideBar();
    };

    render(){
        return(
            <View 
                {... this.props} 
                {... this.state}
                {... this.model}
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    source                  : state.searchReducer.source,
    allSubsource            : state.baseReducer.allSubsource
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    closeSideBar            : () => dispatch( sidebarAction.closeSideBar() ),
    setSubsourceList        : (subsourceType, show) => dispatch( sidebarAction.openSubsourceList(subsourceType, show) ),
    setSource               : (source) => dispatch( searchAction.setSource( source ) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(onClickOutside(FilterSideBar));