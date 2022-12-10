import React from "react";

import "../components/adminLoginPage.css";

const AdminLoginPage = () => {
  return(
    <div className="adminLoginSection">
    <form className="adminLoginForm">
      <input type="text" placeholder="Login" required autoFocus className="searchBarInput"/>
      <input type="text" placeholder="Password" required className="searchBarInput"/>
      <button className="searchBarButton">Login</button>
    </form>
  </div>
  )
};

export default AdminLoginPage;