import Head from "next/head";
import Aboutme from "../components/Aboutme.js";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Proyects from "../components/Proyects/index.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>AngelMarcos-Portafolio</title>
        <meta
          name="description"
          content="Bienvenidos a mi portafolio personal - desarrollador web Frontend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <Aboutme />
        <Proyects />
      </Layout>
    </>
  );
}
