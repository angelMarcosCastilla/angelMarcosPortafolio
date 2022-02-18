import { useEffect, useState } from "react";
import CardProyects from "../Cards/CardsProyects";
import Subtitle from "../Subtitle";
import style from "./Proyects.module.css";

export default function Proyects() {
  const [proyects, setProyects] = useState([]);
  useEffect(() => {
    fetch("/api/proyectos")
      .then((res) => res.json())
      .then(setProyects);
  }, []);
  return (
    <section className={style.proyects}>
      <div className="container">
        <Subtitle>Mis proyectos</Subtitle>
        <div className={style.grid}>
          {proyects.map((proyect) => (
            <CardProyects key={proyect.id} {...proyect} />
          ))}
        </div> 
      </div>
    </section>
  );
}
