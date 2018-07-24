import React            from 'react';
import styled           from 'styled-components';

// import MediaList        from './media.list/media.list';
import Header           from './main.header';

import Sidebar          from '../../components/sidebar/sidebar.entry';
import FunctionList     from './function.list/function.list';

import MediaList        from './media.list/media.list';
import DashboardList    from './dashboard.list/dashboard.list';

export default( props ) => {
    return (
        <MainPage>
            <Header />
            <div className="pageOuter">
                <Sidebar/>
                <FunctionList/>
            </div>
            <div className="scrollPage">
                <div className="container">
                    <div className="pageContent">
                        <MediaList/>
                    </div>
                    <DashboardList/>
                </div>
            </div>
        </MainPage>
    )
};

const MainPage = styled.div`
    background-color:  #EFEFF1;
    position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;

    &> .scrollPage{
        height: calc(100vh - 56px);
        overflow: scroll;
        width: 100%;
        display: flex;

        ::-webkit-scrollbar {
            display: none;
        }

        &> .container{
            width: 1210px;
            marigin: 0 auto;
            display: flex;
            
            &> .pageContent{
                width: 590px;
                margin-left: 310px;
            }
        }
    }
`