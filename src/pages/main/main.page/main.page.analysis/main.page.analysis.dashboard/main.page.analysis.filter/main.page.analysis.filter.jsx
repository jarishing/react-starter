import React            from 'react';
import styled           from 'styled-components';

import { Divider, Icon } from 'antd';

import SortingButton    from './main.page.analysis.filter.sorting/main.page.analysis.filter.sorting';
import DatePicker       from './main.page.analysis.filter.datepicker/main.page.analysis.filter.datepicker';

export default( props ) => {
    return (
        <AnalysisFilter>
            <SortingButton/>
            <Divider type="vertical" />
            <DatePicker/>
        </AnalysisFilter>
    )
};

const AnalysisFilter = styled.div`
    width: 600px;
    height: 40px;
    background-color: white;
    margin-top: 20px;
    padding: 5px 15px;
    display: flex;
    z-index: 1;

    &> .ant-divider-vertical{
        height: auto;
        width: 1px;
        margin: 5px 2px 5px 6px;
    }
`