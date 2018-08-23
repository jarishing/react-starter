import React, {Component} from 'react';
import {connect} from 'react-redux';

import SubsourceTag from '../../../../constant/subsource';

import Handler from './advancedsearch.subsource.handler';


class AdvancedSearchSubsourceEntryPoint extends Component {

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
    tag                 : state.modalReducer.criteriaSubsourceTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchSubsourceEntryPoint);