// import { createContext, useState } from "react";

import { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const name = "Waqar";
  return(
    <AuthContext.Provider value = {name}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext,AuthProvider }