import Header from "./components/header/Header";
import MenuComponent from "./components/menu/MenuComponent";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuComponent />
    </div>
  );
};