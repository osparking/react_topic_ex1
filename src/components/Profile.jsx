import React from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { username } = location.state || {};
  return <div>'{username}'의 프로필 페이지</div>;
}
