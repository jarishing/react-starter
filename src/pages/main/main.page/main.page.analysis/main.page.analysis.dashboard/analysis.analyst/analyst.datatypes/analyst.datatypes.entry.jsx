import React, {Component} from 'react';
import {connect} from 'react-redux';

import Handler from './analyst.datatypes.handler';


class AnalystDatatypesEntryPoint extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps, prevState) {
    }


    render(){
        return (
            <Handler { ... this.props }/>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({ 
    tag                 : state.analysisReducer.analyzedDataType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(AnalystDatatypesEntryPoint);