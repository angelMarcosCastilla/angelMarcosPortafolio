import { useRef, useState } from "react";
import IconMoon from "../icon/IconMoon";
import Sun from "../icon/Sun";
import style from "./Switch.module.css";

export default function Switch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const refstyleToggle = useRef([style.toggleSwitch]);

  const handleToggle = (e) => {
    !isDarkMode
      ? refstyleToggle.current.push(style.toggleSwitchActive)
      : refstyleToggle.current.pop();

    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={style.switch}>
      <span className={refstyleToggle.current.join(" ")} onClick={handleToggle}>
        {isDarkMode ? <IconMoon /> : <Sun />}
      </span>
    </div>
  );
}
