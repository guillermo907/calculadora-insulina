import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const initialTheme = {
    colorOne: "#1e90ff",
    colorTwo: "#3cb371",
    textColor: "rgba(255, 255, 255, 0.785)",
    logoColorMode: "dark",
  };

  const [theme, setTheme] = useState(
    // Get the theme from local storage, or use the initial theme
    JSON.parse(localStorage.getItem("theme")) || initialTheme
  );

  useEffect(() => {
    // Save the theme to local storage when it changes
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
