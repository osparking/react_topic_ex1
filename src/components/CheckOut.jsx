import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function CheckOut() {
  const { userid } = useContext(UserContext);
  return (
    <div>
      <p>'{userid}'첵크아웃</p>
    </div>
  );
}
