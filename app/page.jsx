"use client";
import { useSession } from "next-auth/react";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="p-6">
      {!session && (
        <>
          <h1>Bienvenido a mi app</h1>
          <LoginForm />
        </>
      )}

      {session && session.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
        <>
          <h1>Bienvenido a mi app</h1>
          <p>Accede a tu dashboard desde el menú superior.</p>
        </>
      )}

      {session && session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
        <>
          <h1>Bienvenido {session.user.name}</h1>
          <LoginForm />
        </>
      )}
    </main>
  );
}