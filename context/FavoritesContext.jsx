"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Importar el contexto de login

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  clearFavorites: () => {},
});

export function FavoritesProvider({ children }) {
  const { user } = useContext(AuthContext); // Usuario actual
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos al montar o cuando cambia el usuario
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem("favorites_" + user);
      setFavorites(saved ? JSON.parse(saved) : []);
    } else {
      setFavorites([]); // Si no hay usuario, lista vacía
    }
  }, [user]);

  const addFavorite = (pokemon) => {
    if (!favorites.some((f) => f.name === pokemon.name)) {
      const updated = [...favorites, pokemon];
      setFavorites(updated);
      if (user) {
        localStorage.setItem("favorites_" + user, JSON.stringify(updated));
      }
    }
  };

  const removeFavorite = (name) => {
    const updated = favorites.filter((f) => f.name !== name);
    setFavorites(updated);
    if (user) {
      localStorage.setItem("favorites_" + user, JSON.stringify(updated));
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
    if (user) {
      localStorage.setItem("favorites_" + user, JSON.stringify([]));
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}