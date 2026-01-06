"use client";
import { useSession } from "next-auth/react";
import SearchSection from "../../components/SearchSection";
import FavoritesSection from "../../components/FavoritesSection";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className="p-6">
        <h1>Acceso restringido</h1>
        <p>Debes iniciar sesión como administrador para ver este panel.</p>
      </main>
    );
  }

  if (session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <main className="p-6">
        <h1>Acceso denegado</h1>
        <p>Este panel es exclusivo para el administrador.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1>Panel de administración</h1>
      <p>Contenido exclusivo para el administrador.</p>
      <SearchSection />
      <FavoritesSection />
    </main>
  );
}