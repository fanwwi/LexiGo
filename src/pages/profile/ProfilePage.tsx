import { useState, useEffect } from "react";
import styles from "./profile.module.css";
import defaultProfilePhoto from "../../img/upload-profile.webp";
import Modules from "../../components/modulesComponent/Modules";
import Achievments from "../../components/achievments/Achievments";
import flag from "../../img/flag.png";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../helpers/Types";
import { saveUserImage } from "../../store/users/user.action";

const ProfilePage = () => {
  const { t, i18n } = useTranslation();

  const [userData, setUserData] = useState<{
    name: string;
    joinDate: string;
  } | null>(null);

  const [profilePhoto, setProfilePhoto] = useState<string>(defaultProfilePhoto);
  const [newProfilePhotoUrl, setNewProfilePhotoUrl] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Загружаем данные пользователя и язык
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      try {
        const parsedData = JSON.parse(userDataString);
        setUserData(parsedData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);

    // Загружаем сохраненное фото профиля
    const savedProfilePhoto = localStorage.getItem("profilePhoto");
    if (savedProfilePhoto) {
      setProfilePhoto(savedProfilePhoto);
    }
  }, [i18n]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewProfilePhotoUrl("");
    setInputValue(""); // Очистить inputValue при закрытии модалки
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newProfilePhotoUrl) {
      setProfilePhoto(newProfilePhotoUrl);
      localStorage.setItem("profilePhoto", newProfilePhotoUrl); // Сохраняем в локальное хранилище
    }

    // Сохраняем данные в Redux (если нужно)
    dispatch(saveUserImage(inputValue));

    handleCloseModal();
  };

  const handleRemoveProfilePhoto = () => {
    setProfilePhoto(defaultProfilePhoto); // Устанавливаем дефолтное фото
    localStorage.removeItem("profilePhoto"); // Удаляем из локального хранилища
  };

  return (
    <div className={styles.profile}>
      <img
        src={profilePhoto}
        className={styles.upload}
        alt="profile"
        onClick={() => setIsModalOpen(true)}
      />
      <div className={styles.textBlock}>
        <div className={styles.left}>
          <h3>{userData?.name}</h3>
          <span>
            {t("joined")} {userData ? userData.joinDate : "Error!"}
          </span>
        </div>
        <img src={flag} alt="flag" />
      </div>
      <div className={styles.functBlocks}>
        <Modules />
        <Achievments level1={11} level2={0} />
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{t("write")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newProfilePhotoUrl}
                onChange={(e) => setNewProfilePhotoUrl(e.target.value)}
                placeholder={t("enter")}
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
