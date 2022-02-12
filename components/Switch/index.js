import { useRef } from "react";
import useTheme from "../../hooks/useTheme";
import IconMoon from "../icon/IconMoon";
import Sun from "../icon/Sun";
import style from "./Switch.module.css";

export default function Switch() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const refstyleToggle = useRef([style.toggleSwitch]);

  const handleToggle = (e) => {
    setIsDarkMode(!setIsDarkMode);
    !isDarkMode
      ? refstyleToggle.current.push(style.toggleSwitchActive)
      : refstyleToggle.current.pop();
    setIsDarkMode(!isDarkMode)
  };

  return (
    <div className={`${style.switch}`}>
      <span className={refstyleToggle.current.join(" ")} onClick={handleToggle}>
        {isDarkMode ? <IconMoon /> : <Sun />}
      </span>
    </div>
  );
}
