import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './advancedsearch.subsource.hkgolden.view';
import Model from './advancedsearch.subsource.hkgolden.model';

import * as searchAction from '../../../../../reducers/search/action';

class AdvancedSearchSubsourceHkgolden extends Component {

    constructor(props){
        super(props);
        this.state = {
            query:{
                checkAll    :  _.isEqual( this.props.source.filter( item => item.includes( 'hkgolden' )) , this.props.subsourceList),
                keyword     : "",
            },
            sourceList1: [],
            sourceList2: [],
            sourceList3: [],
            sourceList4: [],
            filterList : []
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        if(!_.isEmpty(this.props.subsourceList)){
            let result = { ... this.state};
            result.filterList = this.props.subsourceList;
            return this.setState( result );
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //filter
        if(prevState.filterList !== this.state.filterList){
            let result = { ... this.state};
            result.sourceList1 = [];
            result.sourceList2 = [];
            result.sourceList3 = [];
            result.sourceList4 = [];

            for(let i = 0; i<this.state.filterList.length; i++){
                if(i%4 == 0){
                    result.sourceList1.push(this.state.filterList[i]);
                }else if(i%4 == 1){
                    result.sourceList2.push(this.state.filterList[i]);
                }else if(i%4 == 2){
                    result.sourceList3.push(this.state.filterList[i]);
                }else if(i%4 == 3){
                    result.sourceList4.push(this.state.filterList[i]);
                }
            }
            return this.setState( result );
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
    source                  : state.searchReducer.source,
    subsourceList           : state.baseReducer.sourcePlatform.hkgolden
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setSource               : (source) => dispatch( searchAction.setSource( source ) ),
    subsourceSelected       : subsource => dispatch( searchAction.subsourceSelected( subsource ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(AdvancedSearchSubsourceHkgolden);