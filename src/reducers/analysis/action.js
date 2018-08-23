import axios                from 'axios';

import moment, { months }               from 'moment';
import { baseUrl }          from '../../constant/base';

export const setLoadingStatus       =   status              => ({ type: 'SET_LOADING_STATUS',     payload: { status }});

export const setDashboardData       =   data                => ({ type: 'SET_DASHBOARD_DATA',     payload: { data }});

export const setAnalyzedDataType    = ( analyzedDataType )  => ({ type: 'SET_ANALYZED_DATA_TYPE', payload: { analyzedDataType }});

export const getDashboardDate = () => {
    return async function( dispatch, getState ){
        let keyword = getState().searchReducer.keyword;

        let source = getState().searchReducer.source;
        let requiredKeyword = getState().searchReducer.requiredKeyword;
        let excludedKeyword = getState().searchReducer.excludedKeyword
        let startDate = getState().searchReducer.startDate;
        let endDate = getState().searchReducer.endDate;
        let accessToken = getState().baseReducer.token;

        if (keyword.indexOf(',') > -1){ 
            keyword = keyword.split(','); 
        }
        if( !_.isEmpty(keyword)&&!isArray(keyword)){
            keyword = [keyword];
        }

        if(endDate == null){
            endDate = moment();
        }
        if(startDate == null){
            startDate = moment(endDate).subtract( 1, 'months');
        }

        await dispatch( setLoadingStatus( true ));

        const body = { andQuery: keyword, orQuery:requiredKeyword, notQuery:excludedKeyword, source: source, startDate: startDate, endDate: endDate };

        let data = await axios.post(`${baseUrl}/dashboard`, body , {headers: {Authorization: `Bearer ${accessToken}`}});
        data = data.data;
        await dispatch( setDashboardData( data ));
        return dispatch( setLoadingStatus( false ));
    }
}