import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as modalAction from '../../../reducers/modal/action';
import * as searchAction from '../../../reducers/search/action';

import View from './advancedsearch.view';
import Model from './advancedsearch.model';

class AdvancedSearch extends Component {

    constructor(props){
        super(props);
        this.state = {};
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
    keyword             : state.searchReducer.keyword,
    startDate           : state.searchReducer.startDate,
    endDate             : state.searchReducer.endDate,
    source              : state.searchReducer.source,

    show                : state.modalReducer.criteriaSubsourceShow,
    allSubsource        : state.baseReducer.allSubsource
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    closeModal          : () => dispatch( modalAction.closeModal() ),

    setKeyword          : keyword => dispatch( searchAction.setKeyword( keyword )),
    setStartDate        : dates => dispatch( searchAction.setStartDate( dates )),
    setEndDate          : dates => dispatch( searchAction.setEndDate( dates )),
    setSource           : (source) => dispatch( searchAction.setSource( source ) ),

    openModelSubsource  : ( subsourceType) => dispatch( modalAction.setModelSubsource( subsourceType ) ),
    closeModalSubsource : () => dispatch( modalAction.closeModalSubsource() ),
});

export default connect( mapStateToProps, mapDispatchToProps )(AdvancedSearch);