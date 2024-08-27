import React from "react";
import styles from "./auth.module.css"

const Login = () => {
  return (
    <div>
      <div className="top">
        <span>Upgrade your</span>
        <h1>Language skills</h1>
        <p>Learn kyrgyz language in English, Russian and Hindi</p>
      </div>
      <img src="" alt="" />
      <div className={styles.bottom}>
        <button id={styles.signIn}>Sign In</button>
        <button id={styles.sigUp}>Create an account</button>
      </div>
    </div>
  );
};

export default Login;
