// components/ThemeToggle.jsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState("light");

  // Leer el modo guardado al montar
  useEffect(() => {
    const saved =
      typeof window !== "undefined" &&
      (localStorage.getItem("themeMode") || "light");

    setMode(saved);
    document.body.classList.toggle("dark-mode", saved === "dark");
    document.body.classList.toggle("light-mode", saved === "light");
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);

    // Aplicar clases al body
    document.body.classList.toggle("dark-mode", next === "dark");
    document.body.classList.toggle("light-mode", next === "light");

    // Guardar en localStorage
    localStorage.setItem("themeMode", next);
  };

  return (
    <button
      onClick={toggle}
      className="toggle-mode"
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}