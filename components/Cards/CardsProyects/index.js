import useTheme from "../../../hooks/useTheme";
import style from "./CardProyects.module.css";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import Card from "../../Cards";
export default function CardProyects({ image, copy }) {
  const { isDarkMode } = useTheme();
  return (
    <Card className={style.cardProyects} >
      <header>
        <img src={image} alt="image" />
      </header>
      <div>
        <p>{copy}</p>
      </div>
      <footer>
        <a href="#" className={style.second}>
          {" "}
          ver repositorio <IoArrowRedoCircleOutline />
        </a>
        <a href="#"> visitar</a>
      </footer>
    </Card>
  );
}
