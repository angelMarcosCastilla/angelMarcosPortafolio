import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function useTheme() {
  const data = useContext(ThemeContext);
  return data;
}
