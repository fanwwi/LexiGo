import styles from "./moduleIcons.module.css";
import icon1 from "../../img/morflax-studio.png";
import icon2 from "../../img/morflax-studio (1).png";
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
        border: "6px solid #00ffc8d0",
        borderRadius: "50%",
        padding: "2px",
        boxShadow: "0 0 10px #00ffc8d0, inset 0 0 10px #00ffc8d0",
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
