import React, {Component} from 'react';
import {connect} from 'react-redux';

import Handler from './filter.subsourc.handler';

class FilterSubsourceEntryPoint extends Component {

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
    tag : state.sidebarReducer.subsourceTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(FilterSubsourceEntryPoint);