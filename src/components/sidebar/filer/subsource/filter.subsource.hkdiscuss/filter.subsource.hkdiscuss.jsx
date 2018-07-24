import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './filter.subsource.hkdiscuss.view';

class FilterSubsourceHKdiscuss extends Component {

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
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(FilterSubsourceHKdiscuss);