import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import quotesReducer from "./quotesReducer";

const reducers = combineReducers({
  quotes: quotesReducer,
  loading: loadingReducer,
});

export default reducers;
