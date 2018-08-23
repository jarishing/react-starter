import React, {Component} from 'react';

import  HomePage        from './main.page.home/main.page.home';
import  AnalysisPage    from './main.page.analysis/main.page.analysis.jsx';

let MODAL = {
    HOME            : HomePage,
    ANALYSIS        : AnalysisPage
}

export default (props) => {
    const Handler = MODAL[props.tag || 'HOME'];
    // const Handler = MODAL['ANALYSIS'];
    return (
        <Handler />
    )
}