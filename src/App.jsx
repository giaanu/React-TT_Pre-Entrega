import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
