import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const combine = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(combine, applyMiddleware(thunk));

export default store;
