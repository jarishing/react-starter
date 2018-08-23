import React            from 'react';
import styled           from 'styled-components';

import AnalystDataDiagram   from './analyst.datatypes/analyst.datatypes.entry';

export default( props ) => {

    return (
        <Analyst>
            <AnalystDataDiagram/>
        </Analyst>
    )
};

const Analyst = styled.div`
    width: 600px;
    height: 400px;
    background-color: white;
    padding: 14px;
    margin-top: 20px;
`