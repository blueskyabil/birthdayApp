import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk" 
import AuthReducer from '../reducer/AuthReducer';
import RootReducer from "../reducer/index"

const middleware = [thunk]

const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;


