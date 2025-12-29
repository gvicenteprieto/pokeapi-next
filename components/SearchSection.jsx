"use client";
import { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { AuthContext } from "../context/AuthContext";

export default function SearchSection() {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext); // usuario actual
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState([]);

  const searchPokemon = async () => {
    if (!name) return;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!res.ok) throw new Error("No encontrado");
      const data = await res.json();

      if (type && !data.types.some((t) => t.type.name === type)) {
        setResults([]);
        return;
      }

      setResults([data]);
    } catch {
      setResults([]);
    }
  };

  const showAll = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      const detailed = await Promise.all(
        data.results.map(async (p) => {
          const r = await fetch(p.url);
          return r.json();
        })
      );

      setResults(detailed);
    } catch {
      setResults([]);
    }
  };

  return (
    <section className="search-section">
      <label>
        Buscar por nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Pikachu"
        />
      </label>

      <label>
        Filtrar por tipo:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">-- Tipo --</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
        </select>
      </label>

      <button onClick={searchPokemon}>Buscar</button>
      <button onClick={showAll}>Mostrar todos</button>

      <div id="results-container">
        {results.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          results.map((p) => {
            const exists = favorites.some((f) => f.name === p.name);
            return (
              <div key={p.name} className="card">
                <img src={p.sprites.front_default} alt={p.name} />
                <h3>{p.name}</h3>
                <p>Tipo: {p.types.map((t) => t.type.name).join(", ")}</p>

                {!user ? (
                  // Caso: no hay login
                  <button disabled title="Debes iniciar sesión para agregar favoritos">
                    🔒 Inicia sesión para agregar
                  </button>
                ) : (
                  // Caso: usuario logueado
                  <button
                    disabled={exists}
                    onClick={() => addFavorite(p)}
                    title={exists ? "Ya está en favoritos" : "Agregar a favoritos"}
                  >
                    ⭐ {exists ? "En favoritos" : "Agregar a favoritos"}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}