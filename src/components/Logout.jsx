import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Logout() {
  const { state, dispatch } = useContext(UserContext);
  function setDefaultUser() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div>
      <button
        disabled={state.userid === "guest" ? true : false}
        onClick={setDefaultUser}
      >
        로그아웃
      </button>
    </div>
  );
}
