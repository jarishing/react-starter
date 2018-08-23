import React, {Component} from 'react';
import {connect} from 'react-redux';
import _                  from 'lodash';

import View from './filter.subsource.facebook.view';
import Model from './filter.subsource.facebook.model';
import * as searchAction from '../../../../../reducers/search/action';

class FilterSubsourceFacebook extends Component {

    constructor(props){
        super(props);
        this.state = {
            query:{
                checkAll    :  _.isEqual( this.props.source.filter( item => item.includes( 'facebook' )) , this.props.subsourceList),
                keyword     : "",
                filterList  : this.props.subsourceList
            }
        };
        this.model = Model.bind(this)();
    }
    
    componentDidUpdate(){
    }

    render(){
        return(
            <View 
                {... this.props} 
                {... this.state}
                {... this.model}
            >
            </View>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    source                  : state.searchReducer.source,
    subsourceList           : state.baseReducer.sourcePlatform.facebook
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setSource               : (source) => dispatch( searchAction.setSource( source ) ),
    subsourceSelected       : subsource => dispatch( searchAction.subsourceSelected( subsource ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(FilterSubsourceFacebook);