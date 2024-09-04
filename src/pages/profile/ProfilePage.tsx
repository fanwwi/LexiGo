import styles from "./profile.module.css";
import profilePhoto from "../../img/upload-profile.webp";
import Modules from "../../components/modulesComponent/Modules";
import Achievments from "../../components/achievments/Achievments";
import Tests from "../../components/testComponent/Tests";

const ProfilePage = () => {
  return (
    <div className={styles.profile}>
      <img
        src={profilePhoto}
        className={styles.upload}
        alt="upload profile photo"
      />
      <h3>Имя :)</h3>
      <div className={styles.functBlocks}>
        <Modules />
        <Achievments level1={21} level2={0}/>
        <Tests />
      </div>
    </div>
  );
};

export default ProfilePage;
