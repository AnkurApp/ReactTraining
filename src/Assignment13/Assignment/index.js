import React, { useReducer } from "react";

import ColorScreen from "../Modules/colorScreen";

import {
  colorReducer,
  initialData,
  initialTheme,
  themeReducer,
} from "../Modules/Reducer";
import { ColorContext } from "../Modules/context";

export default function Assignment13() {
  const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme);

  const [colorState, colorDispatch] = useReducer(colorReducer, initialData);

  return (
    <ColorContext.Provider
      value={{
        state: { themeState, colorState },
        dispatch: { themeDispatch, colorDispatch },
      }}
    >
      <ColorScreen />
    </ColorContext.Provider>
  );
}
