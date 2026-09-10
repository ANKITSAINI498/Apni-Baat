import { createContext, useContext, useState } from "react";
const C = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Ankit", role: "Demo user" });
  return <C.Provider value={{ user, setUser }}>{children}</C.Provider>;
}
export const useAuth = () => useContext(C);
