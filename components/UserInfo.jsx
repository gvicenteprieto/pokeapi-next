// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function UserInfo() {
//   const { data: session } = useSession();

//   if (!session) {
//     return (
//       <div>
//         <p>No estás autenticado</p>
//         <button onClick={() => signIn("github")}>Iniciar sesión con GitHub</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <img src={session.user.image} alt="avatar" width={40} />
//       <p>{session.user.name}</p>
//       <p>{session.user.email}</p>
//       <button onClick={() => signOut()}>Cerrar sesión</button>
//     </div>
//   );
// }

"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button 
        onClick={() => signIn("github")}
        className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Iniciar sesión
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <img 
        src={session.user.image} 
        alt="avatar" 
        width={32} 
        className="rounded-full border" 
      />
      <button 
        onClick={() => signOut()}
        className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
}