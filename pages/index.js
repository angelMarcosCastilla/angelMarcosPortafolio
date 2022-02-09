import Head from "next/head";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

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
      </Layout>
    </>
  );
}
