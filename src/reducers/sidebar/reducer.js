import { createReducer }    from '../../utils';

import sidebarTag           from '../../constant/sidebar';
import subsourceTag         from '../../constant/subsource';

const initState = { 
    sidebarShow : false,
    sidebarTag  : sidebarTag.DEFAULT,

    subsourceShow : false,
    subsourceTag  : subsourceTag.DEFAULT
};

const actionHandlers = {
    SIDEBAR_OPEN: ( state, action ) => {
        let result  = { ... state };
        result.sidebarShow = action.payload.show;
        result.sidebarTag  = action.payload.siedbarType;
        return result;
    },
    SIDEBAR_CLOSE: ( state, action ) => {
        let result  = { ... state };
        result.sidebarShow = false;
        result.sidebarTag  = sidebarTag.DEFAULT;
        return result;
    },
    SUBSOURCELIST_OPEN: ( state, action ) => {
        let result  = { ... state };
        result.subsourceShow = action.payload.show;
        result.subsourceTag  = action.payload.subsourceType;
        return result;
    }
};

export default createReducer(initState, actionHandlers);