import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      대쉬보드
      <Outlet />
    </div>
  );
}
