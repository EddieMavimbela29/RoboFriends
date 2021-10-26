import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import robotReducer from "./robotRedux";
import searchFieldReducer from "./searchRedux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger()

const rootReducer = combineReducers({ robot: robotReducer, searchField: searchFieldReducer });

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
