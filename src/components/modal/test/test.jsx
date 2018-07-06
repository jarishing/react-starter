import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './test.view';
import * as modalAction from '../../../reducers/modal/action';

class Test extends Component {

    constructor(props){
        super(props);
        this.state = {}
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
    show: state.modalReducer.show
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    closeModal: () => dispatch( modalAction.closeModal() ),
});

export default connect( mapStateToProps, mapDispatchToProps )(Test);