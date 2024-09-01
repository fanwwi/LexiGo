import React from "react";
import styles from "../auth/auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сохраняем язык в localStorage
  };

  return (
    <div className={styles.auth}>
      <h1>{t("get_started")}</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form}>
        <input type="email" className={styles.input} placeholder={t("email")} />
        <input
          type="password"
          className={styles.input}
          placeholder={t("password")}
        />
        <input
          type="password"
          className={styles.input}
          placeholder={t("confirm_password")}
        />

        <p className={styles.p}>
          {t("have_account")} <Link to={"/login"}>{t("login")}</Link>
        </p>

        <button className={styles.btn}>{t("sign_up")}</button>
        <select onChange={changeLanguage} defaultValue={i18n.language}  className={styles.selectLang}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="hi">हिंदी</option>
        </select>
      </form>
    </div>
  );
};

export default Register;
