import React, {Component} from 'react';
import {connect} from 'react-redux';
import onClickOutside from "react-onclickoutside";

import View from './filter.view';
import * as sidebarAction from '../../../reducers/sidebar/action';

class FilterSideBar extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    handleClickOutside = evt => {
        this.props.closeSideBar();
    };

    render(){
        return(
            <View 
                {... this.props} 
                {... this.state}
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    closeSideBar: () => dispatch( sidebarAction.closeSideBar() ),
    setSubsourceList: (subsourceType, show) => dispatch( sidebarAction.openSubsourceList(subsourceType, show) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(onClickOutside(FilterSideBar));