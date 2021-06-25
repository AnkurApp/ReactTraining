import { DECREMENT, INCREMENT } from "../Utils/ActionNames";

const initialState = {
  count: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payLoad,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payLoad,
      };
    default:
      return state; 
  }
};

export default Reducer;
