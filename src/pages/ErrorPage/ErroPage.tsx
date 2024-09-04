import React, { useEffect } from "react";
import styles from "./Errorpage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErroPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);
  return (
    <div className={styles.cont}>
      <h3 className={styles.error}>404</h3>
      <h1 className={styles.title}>{t('page_not_found')}</h1>
      <p className={styles.text}>
        {t('error_message')}
      </p>
      <img className={styles.coffe} src={require('../../img/spilledCoffe.png')} alt="spilled coffe" />

      <Link to={'/'} className={styles.Link}>{t('go_home')}</Link>
    </div>
  );
};

export default ErroPage;
