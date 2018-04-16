import appReducer from './reducers'
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux'
import initialStore from '../initialStore';

const storeFactory = (initialState = {}) => {
  return applyMiddleware(promiseMiddleware())(createStore)(appReducer, initialState)
};

const store = storeFactory(initialStore);
export default store;