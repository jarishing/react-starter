import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as baseAction from '../../reducers/base/action';
import * as searchAction from '../../reducers/search/action';

import View from './main.view';

//develop only, del later
import * as analysisAction from '../../reducers/analysis/action';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    async componentDidMount(){
        // this.props.getInitList();
    }

    async componentDidUpdate(prevProps){
        if(!prevProps.login && this.props.login){
            this.props.getInitList();
            this.props.getSourcePlatform();
            // this.props.getDashboardDate();
        }
    }

    render(){
        return(
            <View 
                { ... this.props } 
                { ... this.state }
                { ... this.model }
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    login: state.baseReducer.login
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    getInitList: () => dispatch(searchAction.getInitSearchList()),
    getSourcePlatform: () => dispatch(baseAction.getSourcePlatform()),


    //develop use only, del later
    getDashboardDate    : () => dispatch( analysisAction.getDashboardDate( ))
});

export default connect( mapStateToProps, mapDispatchToProps )(Main);

