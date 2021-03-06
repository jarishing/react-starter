import axios from 'axios';
import _ from 'lodash';
import { isArray } from 'util';

import { baseUrl } from '../../constant/base';

export const setLoadingStatus   = loading            => ({ type: 'SET_LOADING',          payload: { loading }});
const setSearchList             = searchlist         => ({ type: 'SET_SEARCH_LIST',      payload: { searchlist }});

//set seraching query state
export const setKeyword         = keyword            => ({ type: 'SET_KEYWORD',          payload: { keyword }});
export const setRequiredKeyword = requiredKeyword    => ({ type: 'SET_REQUIRED_KEYWORD', payload: { requiredKeyword }});
export const setExcludedKeyword = excludedKeyword    => ({ type: 'SET_EXCLUDED_KEYWORD', payload: { excludedKeyword }});
export const setSource          = source             => ({ type: 'SET_SOURCE',           payload: { source }});
export const setStartDate       = dates              => ({ type: 'SET_START_DATE',       payload: { dates }});
export const setEndDate         = dates              => ({ type: 'SET_END_DATE',         payload: { dates }});
export const setPostFilter      = ()                 => ({ type: 'SET_POST_FILTER',      payload: { }});

export const subsourceSelected  = subsource          => ({ type: 'SUBSOURCE_SELECTED',   payload: { subsource }});

export const getInitSearchList = () => {
    return async function( dispatch, getState ){
        let accessToken = getState().baseReducer.token;
        let list = await axios.post(`${baseUrl}/search`, {}, {headers: {Authorization: `Bearer ${accessToken}`}});
        list = list.data;
        await dispatch( setSearchList( list ));
        return dispatch( setLoadingStatus( false ));
    }
}

export const searching = () => {
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

        const body = { andQuery: keyword, orQuery:requiredKeyword, notQuery:excludedKeyword, source: source, startDate: startDate, endDate: endDate };
        // const body = { andQuery: keyword, orQuery:requiredKeyword, notQuery:excludedKeyword, source: ["facebook_100毛","discuss_吹水閒聊","hkgolden_體育台","lihkg_體育台","uwants_休閒聊天"], startDate: startDate, endDate: endDate };

        dispatch( setLoadingStatus( true ));
        let list = await axios.post(`${baseUrl}/search`, body, {headers: {Authorization: `Bearer ${accessToken}`}});
        list = list.data;
        await dispatch( setSearchList( list ));
        return dispatch( setLoadingStatus( false ));
    }
}