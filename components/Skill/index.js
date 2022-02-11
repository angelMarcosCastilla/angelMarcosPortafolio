import style from "./Skills.module.css";

export default function Skills({ children, label }) {
  return (
    <span className={style.skill}>
      {children}
      <p>{label}</p>
    </span>
  );
}
