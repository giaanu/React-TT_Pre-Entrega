import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li>
          <Link to="/carrito" className="cart-link">
            <FaShoppingCart />
            {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
