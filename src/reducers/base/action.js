import axios from 'axios';
import { baseUrl } from '../../constant/base';

export const setLoginInfo      = ( user, token )    => ({ type: 'LOGIN',                payload: { user, token }});

export const setSourcePlatfrom = ( list )           => ({ type: 'SET_SOURCE_PLATFROM',  payload: { list }});

export function login ( username, password ){
    return async function( dispatch, getState ){
        const body = {username: username, password: password};
        let info = await axios.post(`${baseUrl}/auth/login`, body );
        info = info.data;
        return dispatch(setLoginInfo( info.username, info.token));
    }   
}

export const getSourcePlatform = () => {
    return async function( dispatch, getState ){
        let accessToken = getState().baseReducer.token;
        let list = await axios.get(`${baseUrl}/getAllSources`, {headers: {Authorization: `Bearer ${accessToken}`}});
        list = list.data;
        return dispatch(setSourcePlatfrom( list ));
    }
}