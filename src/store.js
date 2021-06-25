import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const middleWare = compose(applyMiddleware(thunk, logger));

const Store = createStore(rootReducer, middleWare);

export default Store;
