"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-2">
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="avatar"
            width={32}
            className="rounded-full border"
          />
        )}
        <span>{session.user?.name} ({session.user.role})</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => signIn("github")}
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Iniciar sesión con GitHub
      </button>
      {/* Más adelante habilitar Google */}
      {/* <button
        onClick={() => signIn("google")}
        className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
      >
        Iniciar sesión con Google
      </button> */}
    </div>
  );
}
