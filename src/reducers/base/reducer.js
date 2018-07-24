import { createReducer } from '../../utils';

const initState = { 
    login: null,
    user: null,
    token: null,
};

const actionHandlers = {
    LOGIN : ( state, action ) => {
        let result = { ... state };
        result.login = true;
        result.token = action.payload.token;
        result.user = action.payload.user;
        return result;
    }
};

export default createReducer(initState, actionHandlers);