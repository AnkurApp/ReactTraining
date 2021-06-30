import { createContext } from "react";

import { initialTheme, initialData } from "./Reducer";

export const ColorContext = createContext({
  initialTheme,
  initialData,
});
