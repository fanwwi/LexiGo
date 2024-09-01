import styles from "../auth/auth.module.css";
import getstarted from "../../img/getstarted.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.auth}>
      <h1>get started</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form}>
        <input type="email" className={styles.input} placeholder="Email" />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Confirm the password"
        />
        <select>  
          <option value="">English</option>
          <option value="">Russian</option>
          <option value="">हिंदी</option>
        </select>
        <p className={styles.p}>
          Have account?{" "}
          <p onClick={() => navigate("/log/account/")}>Log into the account</p>
        </p>
        <button className={styles.btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
