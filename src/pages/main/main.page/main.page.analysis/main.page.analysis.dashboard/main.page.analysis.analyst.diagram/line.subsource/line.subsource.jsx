import React, {Component}   from 'react';
import {connect}            from 'react-redux';

import View                 from '../line.subsource/line.subsource.view';
import Model                from '../line.subsource/line.subsource.model';

class LineSubsource extends Component {

    constructor(props){
        super(props);
        this.state = {
            messageDate: [],
            legendLabel: [],
            dataLabelsColor: [ '#158FD8', '#FF6384', '#FFCE56', '#42B8B8', '#CE28D7']
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

export default connect( mapStateToProps, mapDispatchToProps )(LineSubsource);