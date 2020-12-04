import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { HeaderReducers } from "./reducers/HeaderReducers";

let reducers=combineReducers({
    HeaderReducers:HeaderReducers,
})

export const store=createStore(reducers,applyMiddleware(thunk))