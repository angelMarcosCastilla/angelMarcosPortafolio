import useTheme from "../../hooks/useTheme";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <section>
      <div className={`${style.banner} container`}>
        <div className={`${style.content}`}>
          <h1 className={style.titleBanner}>
            ¡ Hola ! <br />
            Soy Angel Marcos
          </h1>
          <p className={style.copyBanner}>Desarrollador web - frontend</p>
        </div>
        <div className={style.bannerActions}>
          <a type="button" href="#" target="_blank" className={style.button}>
            Descargar mi cv
          </a>
          <a className={`${style.button} ${style.github}`} target="_blank">
            Ver Repositorio
          </a>
        </div>
      </div>
    </section>
  );
}
