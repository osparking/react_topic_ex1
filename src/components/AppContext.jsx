import React from "react";
import UserProvider from "../context/UserProvider";
import CheckOut from "./CheckOut";
import Login from "./Login";

export default function AppContext() {
  return (
    <div>
      <UserProvider>
        <Login />
        <CheckOut />
      </UserProvider>
    </div>
  );
}
