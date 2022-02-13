import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function useTheme() {
  const data = useContext(ThemeContext);
  return data;
}
