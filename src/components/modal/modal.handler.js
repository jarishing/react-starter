import React, {Component} from 'react';

import AdvancedSearch from './advancedsearch/advancedsearch';
import Test2    from './test2/test2';

const DefaultModal = () => <div/>;

let MODAL = {
    default         : DefaultModal,

    ADVANCEDSEARCH  : AdvancedSearch,
    TEST2           : Test2
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['ADVANCEDSEARCH'];
    return (
        <Handler />
    )
}