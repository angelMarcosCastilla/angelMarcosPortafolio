import Link from "../Link";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.content}>
        <h1 className={style.titleBanner}>
          ¡ Hola ! <br />
          Soy Angel marcos
        </h1>
        <p className={style.copyBanner}>Desarrollador web - frontend</p>
      </div>
      <div>
        <Link type="button" href="#" target="_blank">
          descargar mi cv
        </Link>
      </div>
    </section>
  );
}
