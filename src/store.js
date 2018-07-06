import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';

let Store = createStore(Reducers, applyMiddleware(thunk));

export default Store;