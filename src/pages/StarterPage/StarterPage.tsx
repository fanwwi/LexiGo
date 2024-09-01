import React, { useEffect } from "react";
import styles from "./StarterPage.module.css";
import taught from "../../img/taught.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StarterPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); 
  };

  return (
    <div className={styles.main_block}>
      <div className={styles.top}>
        <span>{t('upgrade_your')}</span>
        <h1>{t('language_skills')}</h1>
        <p>{t('learn_kyrgyz')}</p>
      </div>
      <img src={taught} alt={t('alt_text')} className={styles.image} />
      <div className={styles.bottom}>
        <Link to={'/login'}>
          <button id={styles.signIn}>
            {t('sign_in')}
          </button>
        </Link>
        <Link to={'/register'}>
          <button id={styles.signUp}>
            {t('create_account')}
          </button>
        </Link>
        <select
        onChange={changeLanguage}
        defaultValue={i18n.language}
        className={styles.selectLang}
      >
        <option value="" disabled>
          Choose your language
        </option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="hi">हिंदी</option>
      </select>
      </div>
    </div>
  );
};

export default StarterPage;
