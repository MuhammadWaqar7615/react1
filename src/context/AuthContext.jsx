// import { createContext, useState } from "react";

import { createContext } from "react";
// import Dashboard from "../pages/Dashboard";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("users")) || null;
  const userSSId = sessionStorage.getItem("user-id") || null;

  const user = users.find((user) => user.id === userSSId);  
  console.log("user in AuthContext: ", user)

  return (
    <AuthContext.Provider value={{ users, userSSId, user }}>
      {children}
    </AuthContext.Provider>
  )
}
