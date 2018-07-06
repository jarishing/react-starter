import axios from 'axios';
import { baseUrl } from '../../constant/base';

export const setLoginInfo      = ( user, token )    => ({ type: 'LOGIN',                payload: { user, token }});

export function login ( username, password ){
    return async function( dispatch, getState ){
        let info = await axios.post(`${baseUrl}/auth/login`, {username, password} );
        info = info.data; 
        return dispatch(setLoginInfo( { username: info.username}, info.token));
    }   
}