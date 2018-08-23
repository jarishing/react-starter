import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as searchAction from '../../../../../../../reducers/search/action';
import * as analysisAction from '../../../../../../../reducers/analysis/action';

import Model from './main.page.analysis.filter.datepicker.model';
import View  from './main.page.analysis.filter.datepicker.view';

class AnalysisPageFilterDatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
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
    startDate           : state.searchReducer.startDate,
    endDate             : state.searchReducer.endDate
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    searching           : () => dispatch( searchAction.searching()),
    getDashboardDate    : () => dispatch( analysisAction.getDashboardDate( )),

    setStartDate        : dates => dispatch( searchAction.setStartDate( dates )),
    setEndDate          : dates => dispatch( searchAction.setEndDate( dates ))
});

export default connect( mapStateToProps, mapDispatchToProps )(AnalysisPageFilterDatePicker);