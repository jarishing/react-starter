import { createReducer }    from '../../utils';

import MenuTag              from '../../constant/menu/menu';
import SortingType          from '../../constant/menu/menu.sorting';

const initState = { 
    menuTag     :   MenuTag.DEFAULT,
    menuShow    :   false,

    sortingType :   SortingType.DEFAULT
};

const actionHandlers = {
    SET_MENU: ( state, action ) => {
        let result  = { ... state };
        result.menuShow = !result.menuShow;
        result.menuTag = action.payload.menuType;
        return result;
    },
    CLOSE_MENU: ( state, action ) => {
        let result  = { ... state };
        result.menuTag = MenuTag.DEFAULT;
        result.menuShow = false;
        return result;
    },
    SET_SORTING_TYPE: ( state, action ) => {
        let result  = { ... state };
        result.sortingType = action.payload.sortingType;
        return result;
    },
};

export default createReducer(initState, actionHandlers);