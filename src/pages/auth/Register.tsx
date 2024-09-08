import styles from "../auth/auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [language, setLanguage] = useState("en"); 
  const navigate = useNavigate();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/login')
  };

  return (
    <div className={styles.auth}>
      <h1>Get started</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Confirm password"
          required
        />

        <p className={styles.p}>
          Haven't started yet? <Link to={"/login"}>Register now!</Link>
        </p>

        <select
          className={styles.selectLang}
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">Choose language</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>

        <button className={styles.btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
