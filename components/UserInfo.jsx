"use client";
import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) return null;

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
