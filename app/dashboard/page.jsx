"use client";
import { useSession } from "next-auth/react";
import SearchSection from "../../components/SearchSection";
import FavoritesSection from "../../components/FavoritesSection";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // Mientras se carga la sesión
  if (status === "loading") {
    return (
      <main className="p-6">
        <h1>Cargando sesión...</h1>
      </main>
    );
  }

  // Caso: sin sesión
  if (!session) {
    return (
      <main className="p-6">
        <h1>Acceso restringido</h1>
        <p>Debes iniciar sesión para ver este panel.</p>
      </main>
    );
  }

  // Caso: sesión pero no admin
  if (session.user.role !== "admin") {
    return (
      <main className="p-6">
        <h1>Acceso denegado</h1>
        <p>Este panel es exclusivo para el administrador.</p>
      </main>
    );
  }

  // Caso: admin
  return (
    <main className="p-6">
      <h1>Panel de administración</h1>
      <p>Contenido exclusivo para el administrador.</p>
      <SearchSection />
      <FavoritesSection />
    </main>
  );
}