import React from "react";
import { UserContext } from "../context/UserProvider";

export default function Logout() {
  const { setUserid } = React.useContext(UserContext);
  function setDefaultUser() {
    setUserid("guest");
  }
  return (
    <div>
      <button onClick={setDefaultUser}>로그아웃</button>
    </div>
  );
}
