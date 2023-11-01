"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { themeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleMode } = useContext(themeContext);
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
