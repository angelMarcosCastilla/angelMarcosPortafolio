import useTheme from "../../../hooks/useTheme";
import style from "./CardProyects.module.css";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import Card from "../../Cards";
export default function CardProyects({ urlImg, name, urlRepo,urlview}) {
  const { isDarkMode } = useTheme();
  return (
    <Card className={style.cardProyects}>
      <header>
        <img src={urlImg} alt="image" />
      </header>
      <div>
        <p>{name}</p>
      </div>
      <footer>
        <a href={urlRepo} className={style.second}>
          ver repositorio <IoArrowRedoCircleOutline />
        </a>
        <a href={urlview}> visitar</a>
      </footer>
    </Card>
  );
}
