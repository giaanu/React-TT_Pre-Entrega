import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCartContext();

  if (cart.length === 0) {
    return <h2 className="cart-empty">🛒 Tu carrito está vacío</h2>;
  }

  return (
    <section className="cart-container">
      <h1>Tu carrito</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>❌ Quitar</button>
          </div>
        </div>
      ))}
      <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
      <button className="cart-clear" onClick={clearCart}>
        Vaciar carrito
      </button>
    </section>
  );
};
