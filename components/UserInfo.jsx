"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>No estás autenticado</p>
        <button onClick={() => signIn("github")}>Iniciar sesión con GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <img src={session.user.image} alt="avatar" width={40} />
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </div>
  );
}