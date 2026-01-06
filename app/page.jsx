"use client";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SearchSection from "../components/SearchSection";
import FavoritesSection from "../components/FavoritesSection";

export default function Home() {
  const { data: session } = useSession();
  const { user } = useContext(AuthContext);

  // Caso: usuario genérico con AuthContext
  if (user) {
    return (
      <main className="p-6">
        <h1>Bienvenido {user}</h1>
        <SearchSection />
        <FavoritesSection />
      </main>
    );
  }

  // Caso: admin con NextAuth
  if (session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <main className="p-6">
        <h1>Bienvenido administrador</h1>
        <p>Accede a tu dashboard desde el menú superior.</p>
        <SearchSection />
        <FavoritesSection />
      </main>
    );
  }

  // Caso: sesión NextAuth pero NO admin → tratarlos como genéricos
  if (session && session.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <main className="p-6">
        <h1>Bienvenido {session.user.name}</h1>
        <SearchSection />
        <FavoritesSection />
      </main>
    );
  }

  // Caso: sin sesión en ninguno → solo mensaje de bienvenida
  return (
    <main className="p-6">
      <h1>Bienvenido a mi app</h1>
    </main>
  );
}