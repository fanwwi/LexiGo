import styles from "./modulePage.module.css";
import notes from "../../img/notes.png";
import ModuleIcon from "../../components/moduleIcon/ModuleIcon";

const ModulePage = () => {
  return (
    <div className={styles.modulePage}>
      <div className={styles.top}>
        <h3>Module 1</h3>
        <img src={notes} alt="" />
      </div>
      <div className={styles.mainModule}>
        <ModuleIcon isActive={false} style={""}/>
        <ModuleIcon isActive={true} style={{ top: "80px", left: "60px" }} />
        <ModuleIcon isActive={false} style={{ top: "170px", left: "30px" }} />
        <ModuleIcon isActive={false} style={{ top: "260px", left: "60px" }} />
        <ModuleIcon isActive={false} style={{ top: "340px" }} />
        <ModuleIcon isActive={false} style={{ top: "420px", right: "60px" }} />
        <ModuleIcon isActive={false} style={{ top: "510px", right: "20px" }} />
        <ModuleIcon isActive={false} style={{ top: "590px", right: "60px" }} />
        <ModuleIcon isActive={false} style={{ top: "670px", right: "100px" }} />
        <ModuleIcon isActive={false} style={{ top: "740px", left: "60px" }} />
        <ModuleIcon isActive={false} style={{ top: "820px", left: "100px" }} />
        <ModuleIcon isActive={false} style={{ top: "900px", right: "70px" }} />
        <ModuleIcon isActive={false} style={{ top: "990px", right: "30px" }} />
        <ModuleIcon isActive={false} style={{ top: "1080px", left: "150px" }} />
        <ModuleIcon isActive={false} style={{ top: "1160px", left: "100px" }} />
      </div>
    </div>
  );
};

export default ModulePage;
