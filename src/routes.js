import React from 'react';
import { connect } from 'react-redux'
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { withCookies } from 'react-cookie';

import App from './components/App';
import { Login, Main } from './pages';
import * as baseAction from './reducers/base/action';

class Routes extends React.Component {

    constructor( props ){
        super( props );
        this.requireAuth = this.requireAuth.bind(this);
    }

    shouldComponentUpdate = () => false;

    async requireAuth (nextState, replaceState) {
        const { cookies } = this.props;
        if( !this.props.logined ){
            if( cookies.get('login', {path:'/'}) == 'true'){
                await this.props.login( cookies.get('user'), cookies.get('password') );
                return;}
            replaceState({ nextPathname: nextState.location.pathname }, '/');
        }
    }

    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App} >
                    <IndexRoute component={Login} />
                        <Route path="/main" component={Main} onEnter={this.requireAuth}/>
                    <Route path="/*" component={Login}/>
                </Route>
            </Router>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    logined: state.baseReducer.login
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    login: ( username, password) => dispatch( baseAction.login(username, password ))
});

export default withCookies( connect(mapStateToProps, mapDispatchToProps)(Routes));
