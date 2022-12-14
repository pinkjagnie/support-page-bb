import React from "react";

import LoggedSuperAdmin from "../components/logged/LoggedSuperAdmin";
import LoggedAdmin from "../components/logged/LoggedAdmin";
import LoggedSupport from "../components/logged/LoggedSupport";

import "../components/panelLoggedPage.css";

const PanelLoggedPage = () => {
  return(
    <div className="loggedPageSection">
      <div className="loggedPageNavBox">
        <div>SuperAdmin</div>
        <div>Admin</div>
        <div>Support</div>
      </div>
      <div>
        <LoggedSupport />
        <LoggedAdmin />
        <LoggedSuperAdmin />
      </div>
    </div>
  )
};

export default PanelLoggedPage;