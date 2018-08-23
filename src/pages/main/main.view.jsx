import React            from 'react';
import styled           from 'styled-components';

import Header           from './main.header/main.header';
import Page             from './main.page/main.page.entry';

export default( props ) => {
    return (
        <MainPage>
            <Header/>
            <div className="pageOuter">
            </div>
            <div className="scrollPage">
                <div className="container">
                    <Page/>
                </div>
            </div>
        </MainPage>
    )
};

// <div className="pageOuter">
//                 <Sidebar/>
//                 <FunctionList/>
//             </div>

// <div className="pageContent">
//                         <MediaList/>
//                     </div>
//                     <DashboardList/>

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
            width: 1240px;
            marigin: 0 auto;
            display: flex;
            
            &> .pageContent{
                width: 590px;
                margin-left: 270px;
            }
        }
    }
`