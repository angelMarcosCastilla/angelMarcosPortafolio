import Image from "next/image";
import Link from "next/link";
import { links } from "../../config/links";
import useTheme from "../../hooks/useTheme";
import logo from "../../public/logo.svg";
import Switch from "../Switch";
import style from "./Navbar.module.css";

export default function Navbar() {
  const { isDarkMode } = useTheme();
  return (
    <nav className={`${style.navbar} container`}>
      <Link href={"/"} passHref>
        <a>
          <Image src={logo} width={45} height={40} alt="logo de angel marcos" />
        </a>
      </Link>
      <div className={`${style.containerMenu} ${isDarkMode ? style.dark : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>
                <a> {link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Switch />
    </nav>
  )
}
