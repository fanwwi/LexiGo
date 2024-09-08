import styles from "./moduleIcons.module.css";
import icon1 from "../../img/morflax-studio.png";
import icon2 from "../../img/morflax-studio (1).png";
import { FC } from "react";

interface ModuleInterface {
  isActive: boolean;
  name: string;
}

const ModuleIcon: FC<ModuleInterface> = ({ isActive = false, name }) => {
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
    <div className={styles.icon}>
      <div className={styles.chapter}>
        <span>{name}</span>
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
