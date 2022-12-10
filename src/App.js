import { createContext, useState } from "react";

import ReactSwitch from "react-switch";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Header from "./components/Header";
import Main from "./components/Main";
import Support from "./components/Support";

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Header />
        <div className="themeSwitcherBox">
          <BsFillSunFill size="1.5em" className="themeSwitcherIcon"/>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <BsFillMoonFill size="1.5em" className="themeSwitcherIcon"/>
        </div>
        <Main />
        <Support />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
