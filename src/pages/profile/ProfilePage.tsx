import styles from "./profile.module.css";
import profilePhoto from "../../img/upload-profile.webp";
import Modules from "../../components/modulesComponent/Modules";
import Achievments from "../../components/achievments/Achievments";
import flag from "../../img/flag.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ProfilePage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div className={styles.profile}>
      <img
        src={profilePhoto}
        className={styles.upload}
        alt="upload profile photo"
      />
      <div className={styles.textBlock}>
        <div className={styles.left}>
          <h3>{t("name")}</h3>
          <span>{t("joined")} June 2024</span>
        </div>
        <img src={flag} alt="" />
      </div>
      <div className={styles.functBlocks}>
        <Modules />
        <Achievments level1={11} level2={0} />
      </div>
    </div>
  );
};

export default ProfilePage;
