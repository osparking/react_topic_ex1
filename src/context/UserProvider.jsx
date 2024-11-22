import React, { createContext, useReducer } from "react";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { userid: "guest" });
  function reducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return { ...state, userid: action.payload };
      case "LOGOUT":
        return { ...state, userid: "guest" };
      default:
        return state;
    }
  }
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
