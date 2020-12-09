import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { HeaderReducers } from "./reducers/HeaderReducers";
import { SectionReducers } from "./reducers/Section-reducers";

let reducers=combineReducers({
    HeaderReducers:HeaderReducers,
    SectionReducers:SectionReducers,
    
})

export const store=createStore(reducers,applyMiddleware(thunk))