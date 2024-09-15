import styles from "./modulePage.module.css";
import notes from "../../img/notes.png";
import arrow from "../../img/arrow.png";
import premium from "../../img/premium.png";
import ModuleIcon from "../../components/moduleIcon/ModuleIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/Types";
import { getLevels } from "../../store/tasks/tasks.actions";
import { useNavigate } from "react-router-dom";

const ModulePage3 = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { allLevels } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    document.body.classList.add(styles.noScroll);
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);

    dispatch(getLevels());
  }, [i18n]);

  return (
    <div className={styles.modulePage}>
      <div className={styles.overlay}>
        <img
          src={arrow}
          alt="arrow"
          className={styles.arrow2}
          onClick={() => navigate(`/profile/${userId}`)}
        />
        <img src={premium} alt="" />
        <h1>{t("access")}</h1>
      </div>
      <div className={styles.top}>
        <div className={styles.topText}>
          <h3>{t("module")} 3</h3>
          <span>{t("advanced")}</span>
        </div>
        <img src={notes} alt="" />
      </div>
      <div className={styles.mainModule}>
        {allLevels
          ?.filter((item) => item.module_id === 2)
          .map((item) => (
            <ModuleIcon
              isActive
              title={item.title}
              key={item.id}
              onClick={() => navigate(`task/${item.id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default ModulePage3;
