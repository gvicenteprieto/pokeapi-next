"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { usePathname } from "next/navigation";
import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";
import { useSession } from "next-auth/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkClasses = (href) =>
    `px-3 py-2 rounded-md font-semibold tracking-wide transition 
     hover:text-indigo-600 hover:bg-indigo-50 hover:shadow-sm
     ${pathname === href ? "text-indigo-700 border-b-2 border-indigo-600" : "text-gray-700"}`;

  return (
    <header className={`header ${open ? "nav-open" : ""}`}>
      <h2 className="text-xl font-bold text-indigo-600">Exámen API</h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className="flex gap-6">
        <Link href="/" className={linkClasses("/")}>Inicio</Link>
        <Link href="/contact" className={linkClasses("/contact")}>Contacto</Link>
        <Link href="/about" className={linkClasses("/about")}>Acerca de</Link>

        <div className="user-block mobile-only flex items-center gap-2">
          {session?.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? (
            <UserInfo />
          ) : (
            <LoginForm />
          )}
          <ThemeToggle />
        </div>
      </nav>

      <div className="user-block desktop-only flex items-center gap-2">
        {session?.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? (
          <UserInfo />
        ) : (
          <LoginForm />
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}