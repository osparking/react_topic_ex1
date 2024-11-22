import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
export default function Login() {
  const { userid, setUserid } = useContext(UserContext);
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
          id="userid"
          onChange={(e) => setUserid(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
