import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Item } from "./components/Item/Item.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;