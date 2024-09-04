import React, { useEffect } from "react";
import styles from "./StarterPage.module.css";
import taught from "../../img/taught.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StarterPage = () => {
  return (
    <div className={styles.main_block}>
      <div className={styles.top}>
        <span>Upgrade your</span>
        <h1>LANGUAGE SKILLS</h1>
        <p>learn kyrgyz</p>
      </div>
      <img src={taught} alt="taught" className={styles.image} />
      <div className={styles.bottom}>
        <Link to={"/login"}>
          <button id={styles.signIn}>Sign In</button>
        </Link>
        <Link to={"/register"}>
          <button id={styles.signUp}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default StarterPage;
