import React from "react";

import { AiOutlineUserAdd, AiOutlineUserSwitch, AiOutlineUserDelete } from "react-icons/ai";

import "./loggedSuperAdmin.css"

const LoggedSuperAdmin = () => {
  return(
    <div className="loggedSuperAdminSection">
      <h1>SuperAdmin</h1>
      
      <div className="loggedSuperAdminSingleBox">
        <div className="loggedSuperAdminSingleTitle">
          <AiOutlineUserAdd size="2rem"/>
          <h3>Dodaj użytkownika</h3>
        </div>
      </div>

      <div className="loggedSuperAdminSingleBox">
        <div className="loggedSuperAdminSingleTitle">
          <AiOutlineUserSwitch size="2rem" />
          <h3>Zmień uprawnienia użytkownika</h3>
        </div>
      </div>

      <div className="loggedSuperAdminSingleBox">
        <div className="loggedSuperAdminSingleTitle">
          <AiOutlineUserDelete size="2rem" />
          <h3>Dezaktywuj użytkownika</h3>
        </div>
      </div>

    </div>
  )
};

export default LoggedSuperAdmin;