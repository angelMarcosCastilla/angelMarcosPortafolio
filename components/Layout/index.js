import React from "react";
import useTheme from "../../hooks/useTheme";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();
  return (
    <>
      <header className={isDarkMode ? "dark" : ""}>
        <Navbar />
      </header>
      <main className={isDarkMode ? "dark" : ""}>{children}</main>

      <Footer />
    </>
  );
}
