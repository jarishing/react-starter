import { createReducer }    from '../../utils';

const initState = { 
    loading         : true,

    searchlist      : [],

    keyword         : "",
    requiredKeyword : [],
    excludedKeyword : [],

    source          : [],
    startDate       : undefined,
    endDate         : undefined,
    postFilter      : false,
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
        return result;
    },
    SET_REQUIRED_KEYWORD: ( state, action ) => {
        let result = { ... state };
        result.requiredKeyword = action.payload.requiredKeyword;
        console.log(result);
        return result;
    },
    SET_EXCLUDED_KEYWORD: ( state, action ) => {
        let result = { ... state };
        result.excludedKeyword = action.payload.excludedKeyword;
        console.log(result);
        return result;
    },
    SET_SOURCE: ( state, action ) => {
        let result = JSON.parse(JSON.stringify(state));
        result.source = action.payload.source;
        result.source = result.source.sort();
        return result;
    },
    SET_START_DATE: ( state, action ) => {
        let result = { ... state };
        result.startDate = action.payload.dates;
        console.log(result);
        return result;
    },
    SET_END_DATE: ( state, action ) => {
        let result = { ... state };
        result.endDate = action.payload.dates;
        console.log(result);
        return result;
    },
    SET_POST_FILTER: ( state, action ) => {
        let result = { ... state };
        result.postFilter = !result.postFilter;
        return result;
    },

    //subsource function
    SUBSOURCE_SELECTED: ( state, action ) => {
        let result = JSON.parse(JSON.stringify(state));
        let source = result.source;
        let subsource = action.payload.subsource;

        if( source.indexOf( subsource ) > -1 ){
            result.source = source.filter( item => item != subsource );
        }else{
            result.source.push( subsource );
        }
        result.source.sort();
        return result;
    }

};

export default createReducer(initState, actionHandlers);