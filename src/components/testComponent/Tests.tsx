import styles from "./test.module.css";
import test from "../../img/test.png";

const Tests = () => {
  return (
    <div className={styles.tests}>
      <h4>Modules</h4>
      <div className={styles.testsBlock}>
        <span>Test 1</span>
        <img src={test} alt="lightning" />
      </div>
      <div className={styles.testsBlock}>
        <span>Test 2</span>
        <img src={test} alt="lightning" />
      </div>
    </div>
  );
};

export default Tests;
