import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import FavoritesSection from "../components/FavoritesSection";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <SearchSection />
        <FavoritesSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}