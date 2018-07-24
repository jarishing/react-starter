import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import Model from './media.list.model';
import ListItem from './media.list.item';
import Loader from './media.list.loader';

class MediaList extends Component {

    constructor(props){
        super(props);
        this.state = {}
        this.model = Model.bind(this)();
    }

    render(){
        return(
            <Stream>
                {
                    this.props.loading ?
                    <div>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                        <Loader/>
                    </div>:
                    <div>
                        {
                            this.props.list.map( item => (
                                <ListItem
                                    { ...item}
                                    key     = { item._id}
                                />
                            ))
                        }
                    </div>
                }
            </Stream>      
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    loading         : state.searchReducer.loading,
    list            : state.searchReducer.searchlist.hits,
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(MediaList);

const Stream = styled.div`
`