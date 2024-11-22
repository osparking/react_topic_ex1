import React, { createContext, useState } from "react";
import CheckOut from "./CheckOut";
import Login from "./Login";
export const userContext = createContext();

export default function AppContext() {
  const [userid, setUserid] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{ userid, setUserid }}>
        <Login />
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}
