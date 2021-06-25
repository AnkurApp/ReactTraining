import { COLOR_FAILURE, COLOR_SUCCESS } from "./actionNames";

const initialState = {
  color: [],
  error: "",
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_SUCCESS: {
      return {
        color: action.payLoad,
        error: "",
      };
    }

    case COLOR_FAILURE: {
      return {
        color: [],
        error: action.payLoad,
      };
    }
    default:
      return state;
  }
};

export default colorReducer;
