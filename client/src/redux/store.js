import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Este reduce, modifica el estado global
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
// thunkMiddleware, permite hacer la request
);

export default store;