import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './datatype.results.view';

class DatatypeResults extends Component {

    constructor(props){
        super(props);
        this.state = {};
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
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(DatatypeResults);