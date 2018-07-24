import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled           from 'styled-components';

import * as searchAction from '../../../reducers/search/action';

import SearchFilter     from './dashboard.list.searchfilter';
import Model    from './dashboard.list.model';

class DashboardList extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.model = Model.bind(this)();
    }

    render(){
        return(
            <DashboardView>
                <SearchFilter
                    keyword             = { this.props.keyword }
                    startDate           = { this.props.startDate }
                    endDate             = { this.props.endDate }

                    searching           = { this.props.searching }

                    setKeyword          = { this.props.setKeyword }
                    handleKeywordChange = { this.model.handleKeywordChange }
                    handleFromChange    = { this.model.handleFromChange }
                    handleToChange      = { this.model.handleToChange }
                />
            </DashboardView>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    keyword             : state.searchReducer.keyword,
    startDate           : state.searchReducer.startDate,
    endDate             : state.searchReducer.endDate,
    postFilter          : state.searchReducer.postFilter
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    searching           : () => dispatch( searchAction.searching()),

    setKeyword          : keyword => dispatch( searchAction.setKeyword( keyword )),
    setStartDate        : dates => dispatch( searchAction.setStartDate( dates )),
    setEndDate          : dates => dispatch( searchAction.setEndDate( dates )),
    setPostFilter       : () => dispatch( searchAction.setPostFilter())
});

export default connect( mapStateToProps, mapDispatchToProps )(DashboardList);

const DashboardView = styled.div`
    width: 290px;
    margin-left: 20px;
`