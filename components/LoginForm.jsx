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
      <div className="login-user flex items-center gap-3">
        <strong className="user-name text-indigo-700">Bienvenido {user}</strong>
        <button
          className="btn-secondary px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={() => {
            const favSection = document.getElementById("favorites-container");
            if (favSection) favSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ⭐ Ver favoritos
        </button>
        <button
          className="btn-close px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
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
    <div className="login-form-initial flex gap-2 items-center">
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && name.trim()) login(name.trim());
        }}
        className="border rounded px-2 py-1"
      />
      <button
        className="btn-login px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        onClick={() => {
          if (name.trim()) login(name.trim());
        }}
      >
        🔑 Iniciar Sesión
      </button>
    </div>
  );
}