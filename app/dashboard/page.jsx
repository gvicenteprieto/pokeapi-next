import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>No estás autenticado. Por favor inicia sesión.</p>;
  }

  return (
    <main>
      <h1>Panel de usuario</h1>
      <p>Bienvenido {session.user.name}</p>
    </main>
  );
}