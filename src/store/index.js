import { combineReducers, legacy_createStore, applyMiddleware, compose} from "redux";
import taskReducer from './taskReducer.js'
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers=combineReducers({
    Task:taskReducer
})

export const store =legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))