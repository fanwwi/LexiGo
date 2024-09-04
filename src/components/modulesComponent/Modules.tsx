import styles from "./mod.module.css";
import lightning from "../../img/coins.png";

const Modules = () => {
  return (
    <div>
      <div className={styles.modules}>
        <h4>Modules</h4>
        <div className={styles.moduleBlock}>
          <span>Module 1</span>
          <img src={lightning} alt="lightning" />
        </div>
        <div className={styles.moduleBlock}>
          <span>Module 2</span>
          <img src={lightning} alt="lightning" />
        </div>
      </div>
    </div>
  );
};

export default Modules;
