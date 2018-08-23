import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './sorting.view';
import Model from './sorting.model';

import * as menuAction from '../../../reducers/menu/action';

class SortingMenu extends Component {

    constructor(props){
        super(props);
        this.state = {},
        this.model = Model.bind(this)();
    }

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
    sortingType: state.menuReducer.sortingType
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    closeMenu                   : () => dispatch( menuAction.closeMenu() ),
    setSortingType              : sortingType => dispatch( menuAction.setSortingType( sortingType ))
});

export default connect( mapStateToProps, mapDispatchToProps )(SortingMenu);