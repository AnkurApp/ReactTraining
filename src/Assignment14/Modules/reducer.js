import { USER_FAILURE, USER_SUCCESS, USER_UPDATE } from "./actionNames";

export const initialState = {
  user: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        user: action.payLoad,
        error: "",
      };
    }
    case USER_FAILURE: {
      return {
        user: [],
        error: action.payLoad,
      };
    }
    case USER_UPDATE: {
      return {
        user: action.payLoad,
        error: "",
      };
    }
    default:
      return state;
  }
};
