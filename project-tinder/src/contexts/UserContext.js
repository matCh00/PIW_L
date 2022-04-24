import { createContext, useState } from "react";
import { useLocalStorage } from "../services/useLocalStorage";


// CONTEXT - ZALOGOWANY UŻYTKOWNIK
export const UserContext = createContext(null);


// PROVIDER
export const UserProvider = ({ children }) => {
  
  // stany w CONTEXT
  const [user, setUser] = useState("");

  // przechowywanie użytkownika w Local Storage
  const [userLS, setUserLS] = useLocalStorage("user", null);

  return (
    <UserContext.Provider value={{ user, setUser, userLS, setUserLS }}>
      {children}
    </UserContext.Provider>
  );
};
