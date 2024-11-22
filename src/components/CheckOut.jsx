import React, { useContext } from "react";
import { userContext } from "./AppContext";

export default function CheckOut() {
  const sharCon = useContext(userContext);
  return (
    <div>
      <p>'{sharCon.userid}'첵크아웃</p>
    </div>
  );
}
