import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  function gotoProfilePageUsingUseNavigateHook() {
    navigate("/dashboard/profile", {state: {username}});
  }
  return (
    <div>
      홈페이지
      <div>
        <h3>useNavigate 후크 사용 연습</h3>
        유저네임:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={gotoProfilePageUsingUseNavigateHook}>
          프로필보기
        </button>
      </div>
    </div>
  );
}
