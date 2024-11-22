import React, { useContext } from "react";
import { userContext } from "./AppContext";

export default function Login() {
  const {userid, setUserid} = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUserid(e.target.userid.value);
    e.target.reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        유저ID:{" "}
        <input
          type="text"
          value={userid}
          placeholder="아이디"
          onChange={(e) => setUserid(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
