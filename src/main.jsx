import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext/useCartContext.jsx";
import { createRoot } from "react-dom/client"
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
