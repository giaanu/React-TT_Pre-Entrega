import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} className="product-img" />
      <h2 className="product-title">{name}</h2>
      <p className="product-price">💰 Precio: ${price}</p>
      <p className="product-desc">{description}</p>
      {children}
    </article>
  );
};