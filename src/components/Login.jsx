import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { state, dispatch } = useContext(UserContext);
  const [tempid, setTempid] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: tempid });
    setTempid("");
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        유저ID:{" "}
        <input
          type="text"
          value={tempid}
          placeholder="아이디"
          id="tempid"
          onChange={(e) => setTempid(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
