import CardProyects from "../Cards/CardsProyects";
import Subtitle from "../Subtitle";
import style from "./Proyects.module.css";

const proyects = [
  { id: 1, image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
  { id: 2, image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
  { id: 3, image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
  { id: 4, image: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
  { id: 5, image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
  { id: 6, image: "https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034__340.jpg", copy: "lorem ipsom mañana juega peru vamos carajo" },
];
export default function Proyects() {
  return (
    <section className={style.proyects}>
      <div className="container">
        <Subtitle>Mis proyectos</Subtitle>
        <div className={style.grid}>

          {
            proyects.map( proyect=><CardProyects  key={proyect.id} {...proyect} />)
          }
          
          
        </div>
      </div>
    </section>
  );
}
