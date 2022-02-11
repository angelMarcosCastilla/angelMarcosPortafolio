import Image from "next/image";
import style from "./Aboutme.module.css";
import photo from "../../public/foto.png";
import Subtitle from "../Subtitle";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import {
  IoLogoReact,
  IoLogoVue,
  IoLogoSass,
  IoGitBranchOutline,
  IoArrowRedoCircleOutline,
} from "react-icons/io5";
import Skills from "../Skill";
import Link from "next/link";

export default function Aboutme() {
  return (
    <section className={style.aboutMe}>
      <div className={style.grid}>
        <div className={style.containerImage}>
          <Image src={photo} alt="foto Angel marcos" className={style.photo} />
        </div>
        <div className={style.info}>
          <Subtitle>Sobre mi</Subtitle>
          <p>
            Hola 👋 Mi nombre es Angel Joel Marcos Castilla, soy desarrollador
            web, Soy autodidacta me gusta estar en constante aprendizaje, me
            gusta trabajar en equipo así aprendo de los demás.
          </p>
          <p>
            Aparte de programar me gusta realizar deporte como jugar fútbol o
            correr por las mañanas
          </p>
          <div>
            <h4>Frontend</h4>
            <div className={style.flex}>
              <Skills label="Html">
                <AiFillHtml5 size={35} />
              </Skills>
              <Skills label="Css">
                <IoLogoCss3 size={35} />
              </Skills>
              <Skills label="JavaScript">
                <IoLogoJavascript size={35} />
              </Skills>
              <Skills label="React">
                <IoLogoReact size={35} />
              </Skills>
              <Skills label="Vue">
                <IoLogoVue size={35} />
              </Skills>
              <Skills label="Sass">
                <IoLogoSass size={35} />
              </Skills>
              <Skills label="Git">
                <IoGitBranchOutline size={35} />
              </Skills>
            </div>
          </div>
          <div>
            <h4>Backend</h4>
            <div className={style.flex}>
              <Skills label="Node js">
                <IoLogoNodejs size={35} />
              </Skills>
            </div>
          </div>
          <Link href="/conoceme" >
            <a className={style.link}>
              Conoceme mas
              <IoArrowRedoCircleOutline />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
