import styles from "./modulePage.module.css";
import notes from "../../img/notes.png";
import ModuleIcon from "../../components/moduleIcon/ModuleIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ModulePage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div className={styles.modulePage}>
      <div className={styles.top}>
        <div className={styles.topText}>
          <h3>{t("module")} 1</h3>
          <span>{t("basic phrases")}</span>
        </div>
        <img src={notes} alt="" />
      </div>
      <div className={styles.mainModule}>
        <ModuleIcon isActive={false} name={t("greeting")} />
        <ModuleIcon isActive={true} name={t("numbers")} />
        <ModuleIcon isActive={false} name={t("time")} />
        <ModuleIcon isActive={false} name={t("colors")} />
        <ModuleIcon isActive={false} name={t("family")} />
        <ModuleIcon isActive={false} name={t("house")} />
        <ModuleIcon isActive={false} name={t("shopping")} />
        <ModuleIcon isActive={false} name={t("clothes")} />
        <ModuleIcon isActive={false} name={t("travelings")} />
        <ModuleIcon isActive={false} name={t("cafe")} />
        <ModuleIcon isActive={false} name={t("seasons")} />
        <ModuleIcon isActive={false} name={t("health")} />
        <ModuleIcon isActive={false} name={t("quiz")} />
        <ModuleIcon isActive={false} name={t("feelings")} />
        <ModuleIcon isActive={false} name={t("school")} />
      </div>
    </div>
  );
};

export default ModulePage;
