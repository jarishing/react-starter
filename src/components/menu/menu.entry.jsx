import React, {Component} from 'react';
import {connect} from 'react-redux';

import Handler from './menu.handeler';

class MenuEntryPoint extends Component {

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
    tag : state.menuReducer.menuTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(MenuEntryPoint);
