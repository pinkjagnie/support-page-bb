import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import ReactSwitch from "react-switch";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeContext = createContext(null)

const SharedLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div id={theme}>
          <div className="themeSwitcherBox">
            <BsFillSunFill size="1.5em" className="themeSwitcherIcon"/>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <BsFillMoonFill size="1.5em" className="themeSwitcherIcon"/>
          </div>
          <ScrollToTop />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </>
  );
};
export default SharedLayout;