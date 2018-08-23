import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled           from 'styled-components';

import * as searchAction from '../../../../../reducers/search/action';
import * as modalAction from '../../../../../reducers/modal/action';

import SearchFilter     from './dashboard.list.searchfilter';
import Model    from './dashboard.list.model';

class DashboardList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterExtend: false,
        };
        this.model = Model.bind(this)();
    }

    render(){
        return(
            <DashboardView>
                <SearchFilter
                    {... this.state}
                    keyword                     = { this.props.keyword }
                    requiredKeyword             = { this.props.requiredKeyword }
                    excludedKeyword             = { this.props.excludedKeyword }

                    startDate                   = { this.props.startDate }
                    endDate                     = { this.props.endDate }

                    searching                   = { this.props.searching }
                    setModal                    = { this.props.setModal }

                    setKeyword                  = { this.props.setKeyword }

                    handleKeywordChange         = { this.model.handleKeywordChange }
                    handleRequiredKeywordChange = { this.model.handleRequiredKeywordChange }
                    handleExcludedKeywordChange = { this.model.handleExcludedKeywordChange }
                    handleFromChange            = { this.model.handleFromChange }
                    handleToChange              = { this.model.handleToChange }
                    handleExtendFilter          = { this.model.handleExtendFilter }
                />
            </DashboardView>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    keyword             : state.searchReducer.keyword,
    requiredKeyword     : state.searchReducer.requiredKeyword,
    excludedKeyword     : state.searchReducer.excludedKeyword,
    startDate           : state.searchReducer.startDate,
    endDate             : state.searchReducer.endDate,
    postFilter          : state.searchReducer.postFilter
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    searching           : () => dispatch( searchAction.searching()),

    setKeyword          : keyword => dispatch( searchAction.setKeyword( keyword )),
    setRequiredKeyword  : requiredKeyword => dispatch( searchAction.setRequiredKeyword( requiredKeyword )),
    setExcludedKeyword  : excludedKeyword => dispatch( searchAction.setExcludedKeyword( excludedKeyword )),
    setStartDate        : dates => dispatch( searchAction.setStartDate( dates )),
    setEndDate          : dates => dispatch( searchAction.setEndDate( dates )),
    setPostFilter       : () => dispatch( searchAction.setPostFilter()),
    
    setModal            : ( modelType, show ) => dispatch( modalAction.openModal( modelType, show ))
});

export default connect( mapStateToProps, mapDispatchToProps )(DashboardList);

const DashboardView = styled.div`
    width: 290px;
    margin-left: 610px;
`