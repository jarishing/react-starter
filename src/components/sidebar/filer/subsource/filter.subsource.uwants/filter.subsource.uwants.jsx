import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './filter.subsource.uwants.view';
import Model from './filter.subsource.uwants.model';
import * as searchAction from '../../../../../reducers/search/action';

class FilterSubsourceUwants extends Component {

    constructor(props){
        super(props);
        this.state = {
            query:{
                checkAll    :  _.isEqual( this.props.source.filter( item => item.includes( 'uwants' )) , this.props.subsourceList),
                keyword     : "",
                filterList  : this.props.subsourceList
            }
        };
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
    source                  : state.searchReducer.source,
    subsourceList           : state.baseReducer.sourcePlatform.uwants
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setSource               : (source) => dispatch( searchAction.setSource( source ) ),
    subsourceSelected       : subsource => dispatch( searchAction.subsourceSelected( subsource ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(FilterSubsourceUwants);