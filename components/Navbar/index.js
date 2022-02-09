import Image from "next/image";
import Link from "next/link";
import { links } from "../../config/links";
import logo from "../../public/logo.svg";
import Switch from "../Switch";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link href={"/"} passHref>
        <a>
          <Image src={logo} alt="logo de angel marcos" />
        </a>
      </Link>
      <div className={style.containerMenu}>
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
  );
}
