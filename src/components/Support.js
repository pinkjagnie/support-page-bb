import React from "react";

import styles from "./support.module.css";

const Support = () => {
  return(
    <div className={styles.supportSection}>
      <div className={styles.supportOverall}>

        <p className={styles.supportName}>Support</p>

        <div className={styles.supportBox}>
          <p className={styles.supportTitle}>Support Ogólny</p>
          <div className={styles.supportStatusOK}>
            <div className={styles.supportStatusText}>
              <p>Dostępnych osób:</p>
              <p>4</p>
            </div>
          </div>
        </div>

        <div className={styles.supportBox}>
          <p className={styles.supportTitle}>Support Techniczny</p>
          <div className={styles.supportStatusBad}>
            <div className={styles.supportStatusText}>
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