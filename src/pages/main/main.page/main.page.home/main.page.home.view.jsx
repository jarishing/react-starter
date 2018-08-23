import React            from 'react';
import styled           from 'styled-components';

import MediaList        from '../../media.list/media.list';
import DashboardList    from './dashboard.list/dashboard.list';

export default( props ) => {
    return (
        <HomePage>
            <MediaList/>
            <DashboardList/>
        </HomePage>
    )
};

const HomePage = styled.div`
`