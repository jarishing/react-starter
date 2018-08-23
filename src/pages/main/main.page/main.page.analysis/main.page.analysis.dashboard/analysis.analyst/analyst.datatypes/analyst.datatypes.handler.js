import React, {Component}   from 'react';
import styled               from 'styled-components';

import { Icon }             from 'antd';

import ResultData           from './datatype.results/datatype.results';
import SourcesData          from './datatype.sources/datatype.sources';

import './style.css';

const DefaultModal = () => (
    <div className="analysis-analyst-loader">
        Click on the overview to have detail on the datas
    </div>
);

const MODAL = {
    default         : DefaultModal,

    RESULTS         : ResultData,
    SOURCES         : SourcesData
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['SOURCES'];
    return (
        <Handler />
    )
}