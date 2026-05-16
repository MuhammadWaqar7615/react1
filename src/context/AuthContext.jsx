// import { createContext, useState } from "react";

import { createContext } from "react";
import Dashboard from "../pages/Dashboard";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("users")) || null;
  const userSSId = sessionStorage.getItem("user-id") || null;
  var userData;

  if (users?.find((user) => user.id === userSSId)) {
    userData = users.find((user) => user);
  } else {
    console.log("there is something wrong");
  }
  console.log("user found!: ", userData);

  return (
    <AuthContext.Provider value={{ users, userSSId }}>
      {children}
    </AuthContext.Provider>
  )
}
