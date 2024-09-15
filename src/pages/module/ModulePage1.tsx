import styles from "./modulePage.module.css";
import notes from "../../img/notes.png";
import arrow from "../../img/arrow.png";
import ModuleIcon from "../../components/moduleIcon/ModuleIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/Types";
import { getLevels } from "../../store/tasks/tasks.actions";
import { useNavigate } from "react-router-dom";

const ModulePage1 = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { allLevels } = useAppSelector((state) => state.tasks);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);

    dispatch(getLevels());
  }, [i18n]);

  return (
    <div className={styles.modulePage}>
      <div className={styles.top}>
        <div className={styles.topText}>
          <img
            src={arrow}
            alt="arrow"
            className={styles.arrow}
            onClick={() => navigate(`/profile/${userId}`)}
          />
          <h3>{t("module")} 1</h3>
          <span>{t("basic phrases")}</span>
        </div>
        <img src={notes} alt="" />
      </div>
      <div className={styles.mainModule}>
        {allLevels
          ?.filter((item) => item.module_id === 1)
          .map((item) => (
            <ModuleIcon
              isActive={item.isActive}
              title={item.title}
              key={item.id}
              onClick={() => navigate(`task/${item.id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default ModulePage1;
