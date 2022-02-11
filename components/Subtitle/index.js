import style from "./Subtitle.module.css";

export default function Subtitle({ children, ...rest }) {
  return <h2 className={style.subtitle}>{children}</h2>;
}
