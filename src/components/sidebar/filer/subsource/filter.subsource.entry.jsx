import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as searchAction from '../../../../reducers/search/action';
import SubsourceTag       from '../../../../constant/subsource';

import Handler from './filter.subsourc.handler';

var iTime;

class FilterSubsourceEntryPoint extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevProps.tag != this.props.tag && prevProps.tag !== SubsourceTag.DEFAULT){
            clearTimeout(iTime);
            iTime = setTimeout( 
                function (){
                this.props.searching();
                }
                .bind(this),3000
            )
        }
    }


    render(){
        return (
            <Handler { ... this.props }/>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({ 
    tag                 : state.sidebarReducer.subsourceTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    searching           : () => dispatch( searchAction.searching()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FilterSubsourceEntryPoint);