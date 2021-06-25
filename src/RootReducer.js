import { combineReducers } from "redux";
import Reducer from "./Assignment11/Counter/Reducer";
import colorReducer from "./Assignment12/Modules/reducer";

const rootReducer = combineReducers({
  Reducer,
  colorReducer,
});

export default rootReducer;
