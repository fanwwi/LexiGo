import React from "react";
import styles from "./mainPage.module.css";
import taught from "../../img/taught.png";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
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
        <Link to={'/register'}>C
        <button id={styles.signUp}>
         reate an account
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
