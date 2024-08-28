import React from "react";
import styles from "./mainPage.module.css";
import taught from "../../img/taught.png";
import { useNavigate } from "react-router-dom";

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
        <button id={styles.signIn} onClick={() => navigate("/log/account/")}>
          Sign In
        </button>
        <button id={styles.signUp} onClick={() => navigate("/create/account/")}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default MainPage;
