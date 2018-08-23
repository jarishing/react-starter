import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled           from 'styled-components';

import * as menuAction from '../../../../../reducers/menu/action';

import Model            from './main.page.analysis.dashboard.model';
import Filter           from './main.page.analysis.filter/main.page.analysis.filter';
import Overview         from './analysis.overview/analysis.overview';
import Analyst          from './analysis.analyst/analysis.analyst';

class AnalysisPageDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.model = Model.bind(this)();
    }

    render(evt){
        return(
            <DashboardView>
                <Filter/>
                <Overview/>
                <Analyst/>
            </DashboardView>
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    tag                 : state.menuReducer.menuTag,
    show                : state.menuReducer.menuShow,
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setMenu             : ( menuType ) => dispatch( menuAction.setMenu( menuType )),
});

export default connect( mapStateToProps, mapDispatchToProps )(AnalysisPageDashboard);

const DashboardView = styled.div`
    margin-left: 20px;
`