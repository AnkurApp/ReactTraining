import axios from "axios";

import { USER_FAILURE, USER_SUCCESS, USER_UPDATE } from "./actionNames";

export const UserSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payLoad: user,
  };
};

export const UserFailure = (error) => {
  return {
    type: USER_FAILURE,
    payLoad: error,
  };
};

export const UserUpdate = (user) => {
  return {
    type: USER_UPDATE,
    payLoad: user,
  };
};

export function UserApi() {
  function flattenObj(obj) {
    const location = {};

    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(location, flattenObj(obj[key]));
      } else {
        location[key] = obj[key];
      }
    });
    return location;
  }

  return async (dispatch) => {
    try {
      let locationData = [];
      const response = await axios.get("https://randomuser.me/api/?results=10");

      response.data.results.map((current) => {
        locationData.push(flattenObj(current.location));
      });

      dispatch(UserSuccess(locationData));
    } catch (error) {
      dispatch(UserFailure(error));
    }
  };
}
