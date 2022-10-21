import React from "react";

import styles from "./main.module.css";

const Main = () => {
  return(
    <div className={styles.mainSection}>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Serwer baza danych</p>
        <div className={styles.serviceStatusOr}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>Duży ruch</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Serwer Oxygen</p>
        <div className={styles.serviceStatusOr}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>Planowana konserwacja</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Serwer Hydrogen</p>
        <div className={styles.serviceStatusOK}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Serwer Backup</p>
        <div className={styles.serviceStatusRest}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>Konserwacja</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Serwer CCTV</p>
        <div className={styles.serviceStatusBad}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>Awaria</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Usługi Klient Biznesowy</p>
        <div className={styles.serviceStatusOK}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.serviceBox}>
        <p className={styles.serviceTitle}>Usługi Klient Indywidualny</p>
        <div className={styles.serviceStatusOK}>
          <div className={styles.serviceStatusText}>
            <p>Status:</p>
            <p>OK</p>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Main;