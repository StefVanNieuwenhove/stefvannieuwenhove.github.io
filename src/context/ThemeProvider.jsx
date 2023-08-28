import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const html = document.querySelector('html');
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      html.classList.add(localTheme);
    } else {
      localStorage.setItem('theme', theme);
      html.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const html = document.querySelector('html');
    html.classList.remove(theme);
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
