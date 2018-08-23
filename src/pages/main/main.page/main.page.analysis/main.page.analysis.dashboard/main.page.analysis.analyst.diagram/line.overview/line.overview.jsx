import React, {Component}   from 'react';
import {connect}            from 'react-redux';

import _                    from 'lodash';
import moment, { months }               from 'moment';

import View                 from './line.overview.view';
import Model                from './line.overview.model';

class LineTotal extends Component {

    constructor(props){
        super(props);
        this.state = {
            messageDate: [],
        };
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.setData();
    }

    async componentDidUpdate(prevProps, prevState){
        if( prevProps.loading&&!this.props.loading ){
            this.model.setData();
        }
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
    data                : state.analysisReducer.data,
    loading             : state.analysisReducer.loading
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(LineTotal);