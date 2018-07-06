import { createReducer }    from '../../utils';

import modalTag             from '../../constant/modal'

const initState = { 
    show    : false,
    tag     : modalTag.DEFAULT
};

const actionHandlers = {
    MODAL_OPEN: ( state, action ) => {
        let result  = { ... state };
        result.show = action.payload.show;
        result.tag  = action.payload.modalType;
        return result;
    },
    MODAL_CLOSE: ( state, action ) => {
        let result  = { ... state };
        result.show = false;
        result.tag  = modalTag.DEFAULT;
        return result;
    }
};

export default createReducer(initState, actionHandlers);