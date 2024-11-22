import React, { createContext, useState } from "react";
import CheckOut from "./CheckOut";
export const userContext = createContext();

export default function AppContext() {
  const [userid, setUserid] = useState("ong");
  return (
    <div>
      <userContext.Provider value={{ userid, setUserid }}>
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}
