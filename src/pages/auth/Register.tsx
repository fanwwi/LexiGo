import styles from "../auth/auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../helpers/Types";
import { registerUser } from "../../store/users/user.action";
import { UserType } from "../../types";

// Простой пример хэширования пароля (можно заменить более сложным алгоритмом)
const hashPassword = (password: string) => {
  return btoa(password); // Base64 хэш, можно заменить на другой метод
};

const Register = () => {
  const [language, setLanguage] = useState("default");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<UserType>({
    name: "",
    password: Number(),
    joinDate: Number(),
    id: Number()
  });

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(registerUser({ data: user, navigate }));
  }

  return (
    <div className={styles.auth}>
      <h1>Get started</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className={styles.input}
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <p className={styles.p}>
          Already have an account? <Link to={"/login"}>Sign in now!</Link>
        </p>

        <p className={styles.language}>Choose the language on which u will study</p>
        <select
          className={styles.selectLang}
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="default">Choose the language</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>

        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
