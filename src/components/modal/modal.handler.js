import React, {Component} from 'react';

import Test     from './test/test';
import Test2    from './test2/test2';

const DefaultModal = () => <div/>;

let MODAL = {
    default         : DefaultModal,

    TEST            : Test,
    TEST2           : Test2
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    return (
        <Handler />
    )
}