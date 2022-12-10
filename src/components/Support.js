import React from "react";

import "./support.css";

const Support = () => {
  return(
    <div className="supportSection">
      <div className="supportOverall">

        <p className="supportName">Support</p>

        <div className="supportBox">
          <p className="supportTitle">Support Ogólny</p>
          <div className="supportStatusOK">
            <div className="supportStatusText">
              <p>Dostępnych osób:</p>
              <p>4</p>
            </div>
          </div>
        </div>

        <div className="supportBox">
          <p className="supportTitle">Support Techniczny</p>
          <div className="supportStatusBad">
            <div className="supportStatusText">
              <p>Dostępnych osób:</p>
              <p>1</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Support;