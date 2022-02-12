import ThemeProvider from "../Context/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} className="dark" />
    </ThemeProvider>
  );
}

export default MyApp;
