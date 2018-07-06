import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as modalAction from '../../reducers/modal/action';

import View from './main.view';
import modalTag from '../../constant/modal'

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div onClick={() => this.props.setModal(modalTag.TEST, true)}>
                    test1
                </div>
                <div onClick={() => this.props.setModal(modalTag.TEST2, true)}>
                    test2
                </div>
            </div>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    show: state.modalReducer.show,
    tag : state.modalReducer.tag
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setModal: (modalType, show) => dispatch( modalAction.openModal(modalType, show) )
});

export default connect( mapStateToProps, mapDispatchToProps )(Main);