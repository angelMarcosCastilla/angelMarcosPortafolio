import useTheme from "../../hooks/useTheme";
import style from "./Card.module.css";
export default function Card({ children, className:aditionalClass, ...rest }) {
  const { isDarkMode } = useTheme();
  return (
    <article
      {...rest}
      className={`${style.card} ${isDarkMode ? style.dark : ""} ${aditionalClass}`}
    >
      {children}
    </article>
  );
}
