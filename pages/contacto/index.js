import React from "react";
import CardContact from "../../components/Cards/cardContact";
import Layout from "../../components/Layout";
import Subtitle from "../../components/Subtitle";
import style from "./Contact.module.css";
import {
  IoPhonePortrait,
  IoChatboxEllipses,
  IoLocationSharp,
} from "react-icons/io5";

export default function Contacto() {
  return (
    <Layout>
      <section className={`container ${style.contact}`}>
        <Subtitle>Contactame</Subtitle>
        <div className={style.container}>
          <div className={style.containerInfo}>
            <CardContact
              title="Telefono"
              text="924463095"
              icon={IoPhonePortrait}

            />
            <CardContact title="Correo" text="angelmarcoscastilla15@gmail.com" icon={IoChatboxEllipses} />
            <CardContact title="direccion" text="Calle san juan 7ma cuadra - Peru -Chincha" icon={IoLocationSharp} />
          </div>
          <div>
            <form>
              <div>
                <label>Nombres: </label>
                <input />
              </div>
              <div>
                <label>Nombres: </label>
                <input />
              </div>
              <div>
                <label>Nombres: </label>
                <input />
              </div>
              <div>
                <label>Nombres: </label>
                <textarea />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
