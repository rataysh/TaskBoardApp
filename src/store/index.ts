/** @format */

import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistedReducer} from "./reducers";
// import {composeWithDevTools} from "redux-devtools-extension"
import {persistStore} from "redux-persist";

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
