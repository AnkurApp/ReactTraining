import { INCREMENT, DECREMENT } from "../Utils/ActionNames";

export function incrementNum(num) {
  return {
    type: INCREMENT,
    payLoad: num,
  };
}

export function decrementNum(num) {
  return {
    type: DECREMENT,
    payLoad: num,
  };
}
