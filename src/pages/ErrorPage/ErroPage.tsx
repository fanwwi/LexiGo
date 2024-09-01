import React from "react";
import styles from "./Errorpage.module.css";
import { Link } from "react-router-dom";

const ErroPage = () => {
  return (
    <div className={styles.cont}>
      <h3 className={styles.error}>404</h3>
      <h1 className={styles.title}>Page Not Found!</h1>
      <p className={styles.text}>
        We’re really sorry, but the page you’re looking for seems to be missing.
        It might have been moved or deleted. Please return to the Main Menu and
        continue browsing from there.
      </p>
      <img className={styles.coffe} src={require('../../img/spilledCoffe.png')} alt="spilled coffe" />

      <Link to={'/'} className={styles.Link}>GO HOME</Link>
    </div>
  );
};

export default ErroPage;
