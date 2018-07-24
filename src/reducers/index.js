import { combineReducers } from 'redux';

import baseReducer from './base/reducer';
import modalReducer from './modal/reducer';
import sidebarReducer from './sidebar/reducer';
import searchReducer from './search/reducer';

const reducers = combineReducers({ baseReducer, modalReducer, sidebarReducer, searchReducer });

export default reducers;