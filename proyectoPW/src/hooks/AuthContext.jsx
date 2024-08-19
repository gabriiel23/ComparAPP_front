// src/hooks/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (userId && token && role) {
      setUser({ userId, token, role });
    }

    console.log("Loaded user from localStorage:", { userId, token, role });
  }, []);

  const login = (userData) => {
    console.log("Attempting to login with:", userData);
    setUser(userData);
    localStorage.setItem("userId", userData.userId);
    localStorage.setItem("token", userData.token);
    localStorage.setItem("role", userData.role);

    console.log("User data stored:", {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    console.log("User data cleared from localStorage.");
  };

  const saveSearch = (searchData) => {
    if (user) {
      console.log("Save search data:", searchData);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, saveSearch }}>
      {children}
    </AuthContext.Provider>
  );
};