import { createReducer } from '../../utils';

const initState = { 
    login: null,
    user: null,
    token: null,

    sourcePlatform: [],
    allSubsource: []
};

const actionHandlers = {
    LOGIN : ( state, action ) => {
        let result = { ... state };
        result.login = true;
        result.token = action.payload.token;
        result.user = action.payload.user;
        return result;
    },
    SET_SOURCE_PLATFROM : ( state, action ) => {
        let result = { ... state };
        result.sourcePlatform = action.payload.list.subSourceList;
        result.allSubsource = action.payload.list.sourceList;
        return result;
    },
};

export default createReducer(initState, actionHandlers);