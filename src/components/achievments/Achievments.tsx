import { useTranslation } from "react-i18next";
import styles from "./achievments.module.css";

const Achievments = ({ level1 = 0, level2 = 0 }) => {
  const maxLevel = 20;
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.achievments}>
      <h4>{t('achievments')}</h4>

      <div className={styles.achievBlock}>
        {level1 > 0 && (
          <div
            className={styles.progressBar}
            style={{ width: `${(level1 / maxLevel) * 100}%` }}
          />
        )}
        <span>
          {t("level")}: {level1} / {maxLevel}
        </span>
      </div>

      <div className={styles.achievBlock}>
        {level2 > 0 && (
          <div
            className={styles.progressBar}
            style={{ width: `${(level2 / maxLevel) * 100}%` }}
          />
        )}
        <span>
          {t("level")}: {level2} / {maxLevel}
        </span>
      </div>
    </div>
  );
};

export default Achievments;
