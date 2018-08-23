import React, {Component} from 'react';
import {connect} from 'react-redux';

import Handler from './main.page.handler';


class MainPageEntryPoint extends Component {

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
    tag                 : state.pageReducer.tag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPageEntryPoint);