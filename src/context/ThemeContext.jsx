import { createContext, useContext, useEffect, useState } from "react";
const C = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("baatchet-theme") || "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("baatchet-theme", theme);
  }, [theme]);
  return (
    <C.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </C.Provider>
  );
}
export const useTheme = () => useContext(C);
