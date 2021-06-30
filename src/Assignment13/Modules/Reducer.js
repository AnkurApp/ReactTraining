import colorsData from "./colorsData";

export const initialTheme = {
  background: "white",
  color: "black",
};

export const initialData = {
  colorsData: colorsData,
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return initialTheme;

    case "DARK":
      return {
        ...state,
        background: "black",
        color: "white",
      };
    default:
      return state;
  }
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        colorsData: colorsData.map((current) => {
          return {
            ...current,
            year: "2021",
          };
        }),
      };

    case "CHANGE_DEFAULT":
      return {
        ...state,
        colorsData: colorsData,
      };
    default:
      return state;
  }
};
