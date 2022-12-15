import React, { useState } from "react";

import ReactSwitch from "react-switch";

import LoggedAdminService from "./LoggedAdminService";

import { MdTimerOff, MdOutlineAvTimer } from "react-icons/md";

import "./loggedAdmin.css";

const LoggedAdmin = () => {
  const [breakTime, setBreakTime] = useState(false);

  const toggleBreakTime = (curr) => {
    setBreakTime(curr);
    console.log(breakTime)
  };

  return(
    <div className="loggedAdminSection">
      <h1>Admin</h1>
      <div className="loggedAdminBreakBox">
        <h3>Zaznacz czy jesteś na przerwie</h3>
        <div className="loggedAdminBreakSwitch">
          <span>brak przerwy</span>
          <MdOutlineAvTimer size="2em" />
          <ReactSwitch onChange={toggleBreakTime} checked={breakTime} uncheckedIcon={false} checkedIcon={false}/>
          <MdTimerOff size="2em" />
          <span>przerwa</span>
        </div>
      </div>
      <LoggedAdminService />      
    </div>
  )
};

export default LoggedAdmin;