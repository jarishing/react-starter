import { createReducer }    from '../../utils';

const initState = { 
    loading     : true,

    searchlist  : [],

    keyword     : "",
    startDate   : undefined,
    endDate     : undefined,
    postFilter  : false,
};

const actionHandlers = {
    SET_LOADING: ( state, action ) => {
        let result = { ... state };
        result.loading = action.payload.loading;
        return result;
    },
    SET_SEARCH_LIST: ( state, action ) => {
        let result = { ... state };
        result.searchlist = action.payload.searchlist;
        return result;
    },

    //Searching Query
    SET_KEYWORD: ( state, action ) => {
        let result = { ... state };
        result.keyword = action.payload.keyword;
        console.log(result);
        return result;
    },
    SET_START_DATE: ( state, action ) => {
        let result = { ... state };
        result.startDate = action.payload.dates;
        return result;
    },
    SET_END_DATE: ( state, action ) => {
        let result = { ... state };
        result.endDate = action.payload.dates;
        return result;
    },
    SET_POST_FILTER: ( state, action ) => {
        let result = { ... state };
        result.postFilter = !result.postFilter;
        return result;
    }

};

export default createReducer(initState, actionHandlers);