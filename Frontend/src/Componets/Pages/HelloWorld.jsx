import React, { useState, useEffect } from "react";
import styles from "./Styles/HelloWorld.module.css";
import i18n from "../Language/i18n";
import { useTranslation } from "react-i18next";

function HelloWorld() {
  const { t, i18n } = useTranslation();
  const [userLanguage, setUserLanguage] = useState(localStorage.getItem("userLanguage") || "pt-BR");

  useEffect(() => {
    i18n.changeLanguage(userLanguage);
    localStorage.setItem("userLanguage", userLanguage);
  }, [userLanguage, i18n]);

  const changeLanguage = (language) => {
    setUserLanguage(language);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.hello}>{t("hello_world")}</h1>
      </div>
      <footer className={styles.footer}>
        <div className={styles["language-buttons"]}>
          <button
            className={userLanguage === "pt-BR" ? styles.active : ""}
            onClick={() => changeLanguage("pt-BR")}
          >
            {t("portuguese")}
          </button>
          <button
            className={userLanguage === "en-US" ? styles.active : ""}
            onClick={() => changeLanguage("en-US")}
          >
            {t("english")}
          </button>
          <button
            className={userLanguage === "es-ES" ? styles.active : ""}
            onClick={() => changeLanguage("es-ES")}
          >
            {t("spanish")}
          </button>
        </div>

        <p>&copy; {t("developer")}</p>
      </footer>
    </div>
  );
}

export default HelloWorld;
