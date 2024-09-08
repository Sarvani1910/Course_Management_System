import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import courseReducer from './reducers';

const rootReducer = combineReducers({
  courses: courseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;