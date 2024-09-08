import styles from "./mod.module.css";
import lightning from "../../img/coins.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Modules = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.modules}>
        <h4>{t("modules")}</h4>
        <div
          className={styles.moduleBlock}
          onClick={() => navigate("/module/1")}
        >
          <span>{t("module")} 1</span>
          <img src={lightning} alt="lightning" />
        </div>
        <div
          className={styles.moduleBlock}
          onClick={() => navigate("/module/2")}
        >
          <span>{t('module')} 2</span>
          <img src={lightning} alt="lightning" />
        </div>
        <div
          className={styles.moduleBlock}
          onClick={() => navigate("/module/3")}
        >
          <span>{t("module")} 3</span>
          <img src={lightning} alt="lightning" />
        </div>
      </div>
    </div>
  );
};

export default Modules;
