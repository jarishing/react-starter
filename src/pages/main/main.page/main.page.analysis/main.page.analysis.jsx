import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as analysisAction  from '../../../../reducers/analysis/action';
import AnalyzedDataType     from '../../../../constant/analyst/analyst.analyzed.datatype';

import View from './main.page.analysis.view';
import Model from './main.page.analysis.model';

class AnalysisPage extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.model = Model.bind(this)();
    }

    async componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount(){
        this.props.setAnalyzedDataType(AnalyzedDataType.DEFAULT);
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
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setAnalyzedDataType : ( analyzedDataType ) => dispatch( analysisAction.setAnalyzedDataType( analyzedDataType ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(AnalysisPage);