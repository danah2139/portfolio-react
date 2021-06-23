import React, { createContext, useState } from "react";
import colorMap from "./colors.json";

export const ThemeContext = createContext({
  selectedColor: colorMap.colors[0],
});
const ThemeProvider = ({ children })=> {
  const [selectedColor, setSelectedColor] = useState(colorMap.colors[0]);

  const value = {
    selectColor: setSelectedColor,
    selectedColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
