import styles from "./moduleIcons.module.css";
import icon1 from "../../img/non-active.png";
import icon2 from "../../img/active.png";
import { FC } from "react";

interface LevelsType {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const ModuleIcon: FC<LevelsType> = ({ isActive = false, title, onClick }) => {
  const icon = isActive ? icon2 : icon1;
  const activeStyle = isActive
    ? {
        border: "6px solid #b700ff",
        borderRadius: "70%",
        padding: "2px",
        boxShadow: "0 0 10px #b700ff, inset 0 0 10px #b700ff",
      }
    : {};

  return (
    <div className={styles.icon} onClick={onClick}>
      <div className={styles.chapter}>
        <span>{title}</span>
      </div>
      <img
        src={icon}
        alt="Module Icon"
        className={styles.iconImage}
        style={{ ...activeStyle }}
      />
    </div>
  );
};

export default ModuleIcon;
