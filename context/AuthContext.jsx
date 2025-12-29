"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (name) => {
    localStorage.setItem("user", name);
    setUser(name);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    localStorage.removeItem("favorites_" + user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}