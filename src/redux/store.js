import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const enhance = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(productReducer, enhance(applyMiddleware(thunk)));

export default store;
