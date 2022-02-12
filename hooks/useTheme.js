import { useContext } from "react";
import { ThemeContext } from "../Context/theme";

export default function useTheme() {
  const data = useContext(ThemeContext);
  return data;
}
