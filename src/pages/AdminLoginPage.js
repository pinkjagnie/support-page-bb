import React from "react";

import "../components/adminLoginPage.css";

const AdminLoginPage = () => {
  return(
    <div className="adminLoginSection">
      <h1>Witaj w panelu admina</h1>
      <div className="adminLoginBox">
      <form className="adminLoginForm">
        <div className="control">
          <label htmlFor="login">Login</label>
          <input type="text" id="login" placeholder="Login" required autoFocus className="adminLoginInput"/>
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="Password" required className="adminLoginInput"/>
        </div>
        <button className="adminLoginButton">Login</button>
      </form>
    </div>
  </div>
  )
};

export default AdminLoginPage;