import styles from "./auth.module.css";
import getstarted from "../../img/getstarted.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.auth}>
      <h1 style={{marginTop: "50px"}}>Already started?</h1>
      <img src={getstarted} alt="" />
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="Email" />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <p className={styles.p}>
          Haven't started yet?
          <Link to={"/register"}>Create account</Link>
        </p>
        <button className={styles.btn} onClick={() => navigate('/profile/:id/')}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
