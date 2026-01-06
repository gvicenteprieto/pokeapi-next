"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedUser.trim() !== "") {
      setUser(savedUser);
    }
  }, []);

  const login = (name) => {
    if (!name || !name.trim()) return; // evita login vacío
    localStorage.setItem("user", name.trim());
    setUser(name.trim());
  };

  const logout = () => {
    if (user) {
      localStorage.removeItem("favorites_" + user);
      localStorage.removeItem("user");
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}