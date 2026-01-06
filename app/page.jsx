import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import FavoritesSection from "../components/FavoritesSection";
import UserInfo from "../components/UserInfo";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h1>Bienvenido a mi app</h1>
        <UserInfo />
        <SearchSection />
        <FavoritesSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}