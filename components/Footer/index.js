import React from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./Footer.module.css"

export default function Footer( {...rest}) {
  const {isDarkMode} = useTheme()
  return (
    <footer className={`${styles.footer} ${isDarkMode && "dark"}`}>
      <p> Creada por @AngelMarcos </p>
    </footer>
  );
}
