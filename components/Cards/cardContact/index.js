import Card from "../../Cards";
import style from "./CardContact.module.css";

export default function CardContact({
  text = "title",
  icon: Icon,
  title = "title",
  ...rest
}) {
  return (
    <Card className={style.cardContact} {...rest}>
      <span>
        <Icon />
      </span>
      <h4>{title}</h4>
      <p>{text}</p>
    </Card>
  );
}
