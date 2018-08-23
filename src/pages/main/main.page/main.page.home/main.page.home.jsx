import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './main.page.home.view';
import Model from './main.page.home.model';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.model = Model.bind(this)();
    }

    render(){
        return(
            <View 
                {... this.props} 
                {... this.state}
                {... this.model}
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(HomePage);