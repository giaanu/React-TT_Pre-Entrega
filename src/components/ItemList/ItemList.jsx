import "./ItemList.css"
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <div className="product-list">
      {list.map((prod) => (
        <Item
          key={prod.id}
          name={prod.title}
          price={prod.price}
          description={prod.description}
          imageUrl={prod.image}
        />
      ))}
    </div>
  );
};