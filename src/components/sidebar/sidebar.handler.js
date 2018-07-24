import React, {Component} from 'react';

import Filter             from './filer/filter';

const DefaultModal = () => <div/>;

let MODAL = {
    default         : DefaultModal,

    FILTER          : Filter
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['FILTER'];
    return (
        <Handler />
    )
}