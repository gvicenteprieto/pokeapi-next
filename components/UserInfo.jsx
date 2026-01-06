"use client";
import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!session || !isAdmin) return null;

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
      <span>{session.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
}