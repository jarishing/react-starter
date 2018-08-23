import React            from 'react';
import styled           from 'styled-components';

import MediaList        from '../../media.list/media.list';
import DashboardList    from './main.page.analysis.dashboard/main.page.analysis.dashboard';

export default( props ) => {
    return (
        <AnalysisPage>
            <MediaList/>
            <DashboardList/>
        </AnalysisPage>
    )
};

const AnalysisPage = styled.div`
    display: flex;
`