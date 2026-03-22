import InteriorCarousel from "./components/carousel/InteriorCarousel";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenuComponent from "./components/menu/MenuComponent";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuComponent />
      <InteriorCarousel />
      <Contacts />
      <Footer />
    </div>
  );
};