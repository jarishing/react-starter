import { createReducer }    from '../../utils';

import modalTag             from '../../constant/modal';
import subsourceTag         from '../../constant/subsource';

const initState = { 
    show    : false,
    tag     : modalTag.DEFAULT,

    //criteria using
    criteriaSubsourceShow: false,
    criteriaSubsourceTag : subsourceTag.DEFAULT
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
    },
    SET_MODEL_SUBSOURCE: ( state, action ) => {
        let result  = { ... state };
        if(result.criteriaSubsourceTag == action.payload.subsourceType){
            result.criteriaSubsourceShow = !result.criteriaSubsourceShow;}
        else{
            result.criteriaSubsourceShow = true;}
        result.criteriaSubsourceTag  = action.payload.subsourceType;
        return result;
    },
    CLOSE_MODEL_SUBSOURCE: ( state, action ) => {
        let result  = { ... state };
        result.criteriaSubsourceShow = false;
        return result;
    },
};

export default createReducer(initState, actionHandlers);