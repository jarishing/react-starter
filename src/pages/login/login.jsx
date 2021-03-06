import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';

import * as baseAction from '../../reducers/base/action';
import * as modalAction from '../../reducers/modal/action';

import View from './login.view';
import Model from './login.model';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: {
                username    : "",
                password    : "",
                loginVaild  : true
            }
        }
        this.model = Model.bind(this)();
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
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    login: ( username, password) => dispatch( baseAction.login(username, password ))
});

export default withCookies(connect( mapStateToProps, mapDispatchToProps )(Login));