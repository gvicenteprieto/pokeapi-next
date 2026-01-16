"use client";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SearchSection from "../components/SearchSection";
import FavoritesSection from "../components/FavoritesSection";

export default function Home() {
  const { data: session, status } = useSession();
  const { user } = useContext(AuthContext);

    if (session) {
    console.log("Email de sesión:", session.user?.email);
  }

  
  if (status === "loading") {
    return <p>Cargando sesión...</p>;
  }

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

  // Caso: sesión NextAuth con rol admin
  if (session?.user?.role === "admin") {
    return (
      <main className="p-6">
        <h1>Bienvenido administrador</h1>
        <p>Accede a tu dashboard desde el menú superior.</p>
        <SearchSection />
        <FavoritesSection />
      </main>
    );
  }

  // Caso: sesión NextAuth con rol user
  if (session?.user?.role === "user") {
    return (
      <main className="p-6">
        <h1>Bienvenido {session.user.name}</h1>
        <SearchSection />
        <FavoritesSection />
      </main>
    );
  }

  // Caso: sin sesión en ninguno
  return (
    <main className="p-6">
      <h1>Bienvenido a mi app</h1>
      <p>Por favor inicia sesión para ver los pokemones y favoritos.</p>
    </main>
  );
}