import React from "react";
import CardContact from "../components/Cards/cardContact";
import Layout from "../components/Layout";
import Subtitle from "../components/Subtitle";

export default function Contacto() {
  return (
    <Layout>
      <section className="container">
        <Subtitle>Contactame</Subtitle>
        <div>
          <CardContact />
        </div>
        <div></div>
      </section>
    </Layout>
  );
}
