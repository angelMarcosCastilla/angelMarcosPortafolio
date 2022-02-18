import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   if(localStorage.getItem("isdark")){
     setIsDarkMode(JSON.parse(localStorage.getItem("isdark")))
   }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("isdark",JSON.stringify(isDarkMode))
  },[isDarkMode])

  const value = { isDarkMode, setIsDarkMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
