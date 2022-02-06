import "../styles/globals.css";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Link href="#home" passHref>
          d
        </Link>
        <Link href="#sombreMi" passHref>
          sobre mi
        </Link>
        <Link href="#inicio" passHref>
          Hola
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
