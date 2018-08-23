import React, {Component}   from 'react';
import {connect}            from 'react-redux';

import View                 from './doughnut.subsource.view';
import Model                from './doughnut.subsource.model';

class DoughnutSubsource extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[],
            labels:[],
            legendLabel: [],
            legendData: [],
            dataLabelsColor: [ '#158FD8', '#FF6384', '#FFCE56', '#42B8B8', '#CE28D7', '#E5E5E5' ]
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

export default connect( mapStateToProps, mapDispatchToProps )(DoughnutSubsource);