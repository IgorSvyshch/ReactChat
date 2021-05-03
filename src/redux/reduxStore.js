import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    appPage: appReducer,
    authPage: authReducer,
    messagePage: messageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;