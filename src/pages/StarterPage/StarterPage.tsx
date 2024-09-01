import React from "react";
import styles from "./StarterPage.module.css";
import taught from "../../img/taught.png";
import { Link } from "react-router-dom";

const StarterPage = () => {
  return (
    <div className={styles.main_block}>
      <div className={styles.top}>
        <span>Upgrade your</span>
        <h1>Language skills</h1>
        <p>Learn kyrgyz language in English, Russian and Hindi</p>

      </div>
      <img src={taught} alt="" className={styles.image} />
      <div className={styles.bottom}>
      <Link to={'/login'}>
        <button id={styles.signIn}>
        Sign In
        </button>
        </Link>
        <Link to={'/register'}>
        <button id={styles.signUp}>
         Сreate an account
        </button>
        </Link>
      </div>
    </div>
  );
};

export default StarterPage;
