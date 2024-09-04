import styles from "./achievments.module.css";

const Achievments = ({ level1 = 0, level2 = 0 }) => {
  return (
    <div className={styles.achievments}>
      <h4>Achievements</h4>
      <div className={styles.achievBlock}>
        {level1 > 0 && (
          <div
            className={styles.progressBar}
            style={{ width: `${level1}%` }}
          />
        )}
        <span>Level: {level1}%</span>
      </div>
      <div className={styles.achievBlock}>
        {level2 > 0 && (
          <div
            className={styles.progressBar}
            style={{ width: `${level2}%` }}
          />
        )}
        <span>Level: {level2}%</span>
      </div>
    </div>
  );
};

export default Achievments;
