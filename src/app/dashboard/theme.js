import React, { createContext, useContext, useState } from 'react';

// Define colors for light and dark mode
const lightTheme = {
  background: '#EEE7DA', // Light background
  text: '#333333', // Dark text for better contrast
  secondary: '#88AB8E', // Accent color
};

const darkTheme = {
  background: '#333333', // Dark background
  text: '#EEE7DA', // Light text for contrast on dark background
  secondary: '#AFC8AD', // Accent color for dark mode
};

// Create context for theme
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ ...currentTheme, isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
