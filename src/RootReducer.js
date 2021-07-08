import { combineReducers } from "redux";
import Reducer from "./Assignment11/Counter/Reducer";
import colorReducer from "./Assignment12/Modules/reducer";
import { userReducer } from "./Assignment15/Modules/reducer";

const rootReducer = combineReducers({
  Reducer,
  colorReducer,
  userReducer,
});

export default rootReducer;
