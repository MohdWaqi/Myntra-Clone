import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [loginPage, setLogin] = useState(false);
  const [isSort, setSort] = useState(false);
  const [sortClick, setSortClick] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        token,
        setToken,
        setLogin,
        loginPage,
        isSort,
        setSort,
        sortClick,
        setSortClick,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
