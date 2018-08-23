import { combineReducers } from 'redux';

import baseReducer from './base/reducer';

import pageReducer  from  './page/reducers';
import searchReducer from './search/reducer';
import analysisReducer from './analysis/reducer';

import menuReducer from './menu/reducer';
import modalReducer from './modal/reducer';
import sidebarReducer from './sidebar/reducer';


const reducers = combineReducers({ baseReducer, modalReducer, sidebarReducer, searchReducer, pageReducer, menuReducer, analysisReducer });

export default reducers;