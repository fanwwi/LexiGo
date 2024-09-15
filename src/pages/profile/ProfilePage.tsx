import { useState, useEffect } from "react";
import styles from "./profile.module.css";
import defaultProfilePhoto from "../../img/upload-profile.webp";
import Modules from "../../components/modulesComponent/Modules";
import Achievments from "../../components/achievments/Achievments";
import flag from "../../img/flag.png";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../helpers/Types";
import {
  getCurrentUser,
  updateProfilePicture,
  clearProfilePhoto,
} from "../../store/users/user.action";

const ProfilePage = () => {
  const { t, i18n } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newProfilePhotoUrl, setNewProfilePhotoUrl] = useState<string | null>(
    null
  );
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const id = Number(localStorage.getItem("userId"));

  useEffect(() => {
    dispatch(getCurrentUser(id));

    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n, dispatch, id]);

  useEffect(() => {
    setProfilePhotoUrl(currentUser?.profilePhoto || defaultProfilePhoto);
  }, [currentUser]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewProfilePhotoUrl(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newProfilePhotoUrl) {
      dispatch(
        updateProfilePicture({
          userId: Number(id),
          profilePicture: newProfilePhotoUrl,
        })
      );
      setProfilePhotoUrl(newProfilePhotoUrl);
    }
    handleCloseModal();
  };

  const handleRemoveProfilePhoto = () => {
    if (currentUser) {
      dispatch(clearProfilePhoto(currentUser.id));
      setProfilePhotoUrl(defaultProfilePhoto);
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profile_top}>
        <img
          src={profilePhotoUrl || defaultProfilePhoto}
          className={styles.upload}
          alt="profile"
          onClick={() => setIsModalOpen(true)}
        />
        <div className={styles.textBlock}>
          <div className={styles.left}>
            <h3>{currentUser?.name}</h3>
            <span>
              {t("joined")} {currentUser ? currentUser.joinDate : "Error!"}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.functBlocks}>
        <Modules />
        <Achievments level1={1} level2={0} level3={0} />
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{t("uploadPhoto")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newProfilePhotoUrl || ""}
                onChange={(e) => setNewProfilePhotoUrl(e.target.value)}
                placeholder={t("enterImageUrl")}
                required
              />
              <button type="submit" className={styles.mainBtn}>
                {t("submit")}
              </button>
            </form>
            <button
              onClick={() => {
                handleRemoveProfilePhoto();
                handleCloseModal();
              }}
              className={styles.removeBtn}
            >
              {t("remove")}
            </button>
            <button onClick={handleCloseModal} className={styles.closeBtn}>
              {t("closeModal")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
