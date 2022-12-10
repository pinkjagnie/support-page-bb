import React from "react";
import { Link } from 'react-router-dom';

import styles from "../components/errorPage.module.css";

const ErrorPage = () => {
  return(
    <div className={styles.errorPageSection}>
      <div className={styles.errorPageBox}>
        <div className={styles.errorPageText}>
          <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="error 404"/>
          <span>404 PAGE</span>
          <p>The page you were looking for could not be found</p>
          <Link to='/' className={styles.link404}>Go Home</Link>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;