import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './filter.subsource.lihkg.view';

class FilterSubsourceLihkg extends Component {

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

export default connect( mapStateToProps, mapDispatchToProps )(FilterSubsourceLihkg);