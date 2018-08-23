import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as analysisAction      from '../../../../../../reducers/analysis/action';
import DataType                 from '../../../../../../constant/analyst/analyst.analyzed.datatype';

import View      from './analysis.overview.view';

class AnalysisOverview extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidUpdate(prevProps, prevState){
    }

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
    data                : state.analysisReducer.data,
    loading             : state.analysisReducer.loading,

    analyzedDataType    : state.analysisReducer.analyzedDataType
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setAnalyzedDataType : ( analyzedDataType ) => dispatch( analysisAction.setAnalyzedDataType( analyzedDataType ) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(AnalysisOverview);