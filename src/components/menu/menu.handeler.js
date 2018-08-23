import React, {Component} from 'react';

import SortingMenu from './sorting/sorting';

const DefaultModal = () => <div/>;

let MODAL = {
    default         : DefaultModal,

    SORTING         : SortingMenu
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['SORTING'];
    return (
        <Handler />
    )
}