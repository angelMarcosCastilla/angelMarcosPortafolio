import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AngelMarcos-Portafolio</title>
        <meta
          name="description"
          content="Bienvenidos a mi portafolio personal - desarrollador web rontend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id="inicio">inicio</section>
        <section id="sombreMi">inicio</section>
        <section id="Home">inicio</section>
      </main>

      <footer className={styles.footer}>
        <p> Creada por @AngelMarcos </p>
      </footer>
    </div>
  );
}
