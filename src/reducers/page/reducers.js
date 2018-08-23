import { createReducer }    from '../../utils';

import pageTag              from '../../constant/page';

const initState = { 
    tag     :   pageTag.HOME
};

const actionHandlers = {
    SET_PAGE: ( state, action ) => {
        let result  = { ... state };
        result.tag  = action.payload.pageType;
        return result;
    }
};

export default createReducer(initState, actionHandlers);