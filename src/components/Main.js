import React from "react";

import "./main.css";

const Main = () => {
  return(
    <div className="mainSection">

      <div className="serviceBox">
        <p className="serviceTitle">Serwer baza danych</p>
        <div className="serviceStatusOr">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>Duży ruch</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Serwer Oxygen</p>
        <div className="serviceStatusOr">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>Planowana konserwacja</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Serwer Hydrogen</p>
        <div className="serviceStatusOK">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Serwer Backup</p>
        <div className="serviceStatusRest">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>Konserwacja</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Serwer CCTV</p>
        <div className="serviceStatusBad">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>Awaria</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Usługi Klient Biznesowy</p>
        <div className="serviceStatusOK">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="serviceBox">
        <p className="serviceTitle">Usługi Klient Indywidualny</p>
        <div className="serviceStatusOK">
          <div className="serviceStatusText">
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Main;