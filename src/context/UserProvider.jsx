import React, { useState, createContext } from "react";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userid, setUserid] = useState("guest");
  return (
    <UserContext.Provider value={{ userid, setUserid }}>
      {children}
    </UserContext.Provider>
  );
}
