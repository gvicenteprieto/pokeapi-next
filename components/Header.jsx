// // components/Header.jsx
// "use client";
// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
// import LoginForm from "./LoginForm"; 
// export default function Header() {
//   return (
//     <header className="header">
//       <h2>Exámen API</h2>
//       <div className="user-block">
//         <LoginForm />  
//         <ThemeToggle />
//       </div>
//     </header>
//   );
// }




// "use client";
// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
// import LoginForm from "./LoginForm";
// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className={`header ${open ? "nav-open" : ""}`}>
//       <h2>Exámen API</h2>

//       {/* Botón hamburguesa (solo mobile) */}
//       <button
//         className="menu-btn"
//         onClick={() => setOpen(!open)}
//         aria-label="Abrir menú"
//       >
//         ☰
//       </button>

//       <nav>
//         <Link href="/">Inicio</Link>
//         <Link href="/contact">Contacto</Link>
//         <Link href="/about">Acerca de</Link>
//       </nav>

//       <div className="user-block">
//         <LoginForm />
//         <ThemeToggle />
//       </div>
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
// import LoginForm from "./LoginForm";
// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className={`header ${open ? "nav-open" : ""}`}>
//       <h2>Exámen API</h2>

//       {/* Botón hamburguesa solo en móviles */}
//       <button
//         className="menu-btn"
//         onClick={() => setOpen(!open)}
//         aria-label="Abrir menú"
//       >
//         ☰
//       </button>

//       {/* Navegación */}
//       <nav>
//         <Link href="/">Inicio</Link>
//         <Link href="/contact">Contacto</Link>
//         <Link href="/about">Acerca de</Link>
//       </nav>

//       {/* Bloque de usuario */}
//       <div className="user-block">
//         <LoginForm />
//         <ThemeToggle />
//       </div>
//     </header>
//   );
// }





"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${open ? "nav-open" : ""}`}>
      <h2>Exámen API</h2>

      {/* Botón hamburguesa solo en móviles */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navegación + bloque de usuario en mobile */}
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/about">Acerca de</Link>

        {/* Bloque de usuario se renderiza dentro del nav en mobile */}
        <div className="user-block mobile-only">
          <LoginForm />
          <ThemeToggle />
        </div>
      </nav>

      {/* Bloque de usuario en desktop */}
      <div className="user-block desktop-only">
        <LoginForm />
        <ThemeToggle />
      </div>
    </header>
  );
}