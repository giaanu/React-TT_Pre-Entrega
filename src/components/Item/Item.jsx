import "./Item.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Item = ({ id, name, price, description, imageUrl }) => {
  const { addToCart } = useCartContext();

  return (
    <article className="product-item">
      <img src={imageUrl} alt={name} />
      <h2 className="product-title">{name}</h2>
      <p className="product-price">💰 Precio: ${price}</p>
      <p className="product-description">{description}</p>
      <button
        className="product-button"
        onClick={() =>
          addToCart({ id, title: name, price, image: imageUrl })
        }
      >
        🛒 Agregar al carrito
      </button>
    </article>
  );
};
