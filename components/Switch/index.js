import { useRef } from "react";
import useTheme from "../../hooks/useTheme";
import IconMoon from "../icon/IconMoon";
import Sun from "../icon/Sun";
import style from "./Switch.module.css";

export default function Switch() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const handleToggle = (e) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${style.switch}`}>
      <span
        className={`${style.toggleSwitch} ${
          isDarkMode ? style.toggleSwitchActive : ""
        }`}
        onClick={handleToggle}
      >
        {isDarkMode ? <IconMoon /> : <Sun />}
      </span>
    </div>
  );
}
