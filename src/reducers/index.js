import { combineReducers } from 'redux';

import baseReducer from './base/reducer';
import modalReducer from './modal/reducer';

const reducers = combineReducers({ baseReducer, modalReducer });

export default reducers;