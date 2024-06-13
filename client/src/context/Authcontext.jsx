import React, { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("user_data"))

  useEffect(() => {
    //const storedData = JSON.parse(localStorage.getItem("user_data"));
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newToken, newData) => {
    localStorage.setItem(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData })
    );
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logOut = () => {
    localStorage.removeItem("user_data");
    setIsAuthenticated(false);
    setToken(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, token, login, logOut, userData}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
