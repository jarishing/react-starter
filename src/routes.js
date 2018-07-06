import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import App from './components/App';
import { Login, Main } from './pages';

class Routes extends React.Component {

    constructor( props ){
        super( props );
    }

    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App} >
                    <IndexRoute component={Login} />
                    <Route path="/main" component={Main} />
                </Route>
            </Router>
        )
    }
}

export default Routes;
