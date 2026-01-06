// app/layout.jsx
import Providers from "./providers";

import './globals.css';
import { FavoritesProvider } from "../context/FavoritesContext";
import { AuthProvider } from "../context/AuthContext";

import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Proyecto PokeAPI",
  description: "Migrado a Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="light-mode">
        <Providers>
        <AuthProvider>
          <FavoritesProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </FavoritesProvider>
        </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}