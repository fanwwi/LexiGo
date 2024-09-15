import { useTranslation } from "react-i18next";
import styles from "./finish.module.css"
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()

  return (
    <div className={styles.finish}>
      <h1>{t("super")}</h1>
      <button onClick={() => navigate(`/module/1`)}>{t("next task")}</button>
    </div>
  );
};

export default Finish;
