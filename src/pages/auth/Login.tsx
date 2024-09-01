import React, { useEffect } from "react";
import styles from "./auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Получаем язык из локального хранилища или используем 'en' по умолчанию
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сохраняем новый язык в локальное хранилище
  };

  return (
    <div className={styles.auth}>
      <h1 style={{ marginLeft: "70px" }}>{t("already_started")}</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder={t("email")} />
        <input
          type="password"
          className={styles.input}
          placeholder={t("password")}
        />
        <p className={styles.p}>
          {t("haven_t_started_yet")}{" "}
          <Link to={"/register"}>{t("create_account")}</Link>
        </p>
        <button className={styles.btn}>{t("sign_in")}</button>
      </form>
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
  );
};

export default Login;
