import axios from "axios";
import { COLOR_SUCCESS, COLOR_FAILURE } from "./actionNames";

export const ColorSuccess = (color) => {
  return {
    type: COLOR_SUCCESS,
    payLoad: color,
  };
};

export const ColorFailure = (error) => {
  return {
    type: COLOR_FAILURE,
    payLoad: error,
  };
};

export const colorsApi = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://reqres.in/api/unknown");
      dispatch(ColorSuccess(response.data.data));
    } catch (error) {
      dispatch(ColorFailure(error));
    }
  };
};
