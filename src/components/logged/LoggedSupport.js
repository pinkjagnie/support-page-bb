import React, { useState } from "react";

import ReactSwitch from "react-switch";

import { MdTimerOff, MdOutlineAvTimer } from "react-icons/md";

import "./loggedSupport.css";

const LoggedSupport = () => {
  const [breakTime, setBreakTime] = useState(false);

  const toggleBreakTime = (curr) => {
    setBreakTime(curr);
    console.log(breakTime)
  };

  return(
    <div className="loggedSupportSection">
      <h1>Support</h1>
      <div className="loggedSupportBreakBox">
        <h3>Zaznacz czy jesteś na przerwie</h3>
        <div className="loggedSupportBreakSwitch">
          <span>brak przerwy</span>
          <MdOutlineAvTimer size="2em" />
          <ReactSwitch onChange={toggleBreakTime} checked={breakTime} uncheckedIcon={false} checkedIcon={false}/>
          <MdTimerOff size="2em" />
          <span>przerwa</span>
        </div>
      </div>
    </div>
  )
};

export default LoggedSupport;