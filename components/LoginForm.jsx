"use client";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FavoritesContext } from "../context/FavoritesContext";

export default function LoginForm() {
  const { user, login, logout } = useContext(AuthContext);
  const { clearFavorites } = useContext(FavoritesContext);
  const [name, setName] = useState("");

  if (user) {
    return (
      <div className="login-user">
        <strong className="user-name">{user}</strong>
        <button
          className="btn-secondary"
          onClick={() => {
            const favSection = document.getElementById("favorites-container");
            if (favSection) favSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ⭐ Ver favoritos
        </button>
        <button
          className="btn-close"
          onClick={() => {
            clearFavorites();
            logout();
          }}
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="login-form-initial">
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          // reemplazo de onKeyPress
          if (e.key === "Enter") login(name); 
        }}
      />
      <button className="btn-login" onClick={() => login(name)}>
        🔑 Iniciar Sesión
      </button>
    </div>
  );
}