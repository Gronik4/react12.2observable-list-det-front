import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import sliseDetails from './sliseDetails';
import SliseList from './sliseList';
import { detChoiceEpic, detRequestEpic } from '../epics/detailEpic';
import { listRequestEpic } from '../epics/listEpic';

const reducer = combineReducers({ showlist: SliseList, showdetails: sliseDetails});
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(detChoiceEpic, detRequestEpic, listRequestEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeEnhansers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(epic);

export default store;
