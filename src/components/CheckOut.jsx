import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function CheckOut() {
  const { state } = useContext(UserContext);
  return (
    <div>
      <p>현 유저 아이디 : {state.userid}</p>
    </div>
  );
}
