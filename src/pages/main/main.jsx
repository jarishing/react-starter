import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as modalAction from '../../reducers/modal/action';
import * as searchAction from '../../reducers/search/action';

import View from './main.view';
import modalTag from '../../constant/modal'

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
            //this.props.initialLoading();


            this.props.getInitList();
        }
    }

    render(){
        return(
            <View 
                { ... this.props } 
                { ... this.state }
                { ... this.model }
            />
            // <div>
            //     <div onClick={() => this.props.setModal(modalTag.TEST, true)}>
            //         test1
            //     </div>
            //     <div onClick={() => this.props.setModal(modalTag.TEST2, true)}>
            //         test2
            //     </div>
            // </div>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    login: state.baseReducer.login,
    show: state.modalReducer.show,
    tag : state.modalReducer.tag
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    getInitList: () => dispatch(searchAction.getInitSearchList())
});

export default connect( mapStateToProps, mapDispatchToProps )(Main);

