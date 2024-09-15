import { useState } from "react";
import styles from "./auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8000/users");
      const users = response.data;

      const user = users.find(
        (user: { name: string; password: string; id: number }) =>
          user.name === name && user.password === password
      );

      if (user) {
        localStorage.setItem("userId", user.id.toString());
        navigate(`/profile/${user.id}`);
      } else {
        navigate("/register/");
      }
    } catch (error) {
      console.error("Error checking user:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.auth}>
      <h1 style={{ marginTop: "50px" }}>Already started?</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className={styles.p}>
          Haven't started yet?
          <Link to={"/register"}>Create account</Link>
        </p>
        <button type="submit" className={styles.btn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
