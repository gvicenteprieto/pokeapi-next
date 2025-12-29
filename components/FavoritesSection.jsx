"use client";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { AuthContext } from "../context/AuthContext";

export default function FavoritesSection() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);

  return (
    <section className="favorites-section">
      <h2>Favoritos</h2>

      {!user ? (
        // Caso: no hay login
        <div className="info-message">
          <h3>Favoritos</h3>
          <p>Ingrese con su usuario para gestionar sus Pokémon favoritos</p>
          <p><small>Podrá guardar, ver y eliminar sus Pokémon preferidos</small></p>
        </div>
      ) : favorites.length === 0 ? (
        // Caso: usuario logueado pero sin favoritos
        <div className="info-message">
          <h3>Tus Favoritos</h3>
          <p>Aún no tienes Pokémon favoritos</p>
          <p><small>Agrega algunos Pokémon haciendo clic en "Agregar a Favoritos"</small></p>
        </div>
      ) : (
        // Caso: usuario logueado con favoritos
        <div className="favorites-container">
          {favorites.map((p) => (
            <div key={p.name} className="card">
              <img src={p.sprites?.front_default || p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>Tipo: {p.types?.map((t) => t.type?.name).join(", ") || p.types.join(", ")}</p>
              <button onClick={() => removeFavorite(p.name)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}