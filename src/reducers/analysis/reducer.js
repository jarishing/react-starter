import { createReducer }    from '../../utils';

import DataType             from '../../constant/analyst/analyst.analyzed.datatype';

const initState = { 
    loading             : true,

    data                : {},

    analyzedDataType    : DataType.DEFAULT
};

const actionHandlers = {
    SET_LOADING_STATUS: ( state, action ) => {
        let result = { ... state };
        result.loading = action.payload.status;
        return result;
    },
    SET_DASHBOARD_DATA: ( state, action ) => {
        let result = { ... state };
        result.data = action.payload.data;
        console.log(result);
        return result;
    },
    SET_ANALYZED_DATA_TYPE: ( state, action ) => {
        let result  = { ... state };
        result.analyzedDataType = action.payload.analyzedDataType;
        return result;
    }
};

export default createReducer(initState, actionHandlers);