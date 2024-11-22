import React, { useContext } from "react";
import { userContext } from "./AppContext";

export default function CheckOut() {
  const sharCon = useContext(userContext);
  return (
    <div>
      <input
        type="text"
        value={sharCon.userid}
        onChange={(e) => sharCon.setUserid(e.target.value)}
      />
      <p>'{sharCon.userid}'첵크아웃</p>
    </div>
  );
}
