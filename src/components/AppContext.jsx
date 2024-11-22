import React, { createContext, useState } from "react";
import CheckOut from "./CheckOut";
export const userContext = createContext();

export default function AppContext() {
  const [userid, setUserid] = useState("guest");
  return (
    <div>
      유저ID:{" "}
      <input
        type="text"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
      />
      <userContext.Provider value={{ userid }}>
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}
