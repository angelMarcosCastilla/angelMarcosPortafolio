import Card from '../../Cards'
import style from "./CardContact.module.css"
import { AiFillBell } from "react-icons/ai";

export default function CardContact() {
  return (
    <Card className={style.cardContact}>
      <span>
        <AiFillBell/>
      </span>
      <h4>lore ipson aud gsd ghs a</h4>
      <p>Calle san juan 7ma cuada</p>
    </Card>
  )
}
