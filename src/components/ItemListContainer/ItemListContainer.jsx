import { useState } from "react";
import { useEffect } from "react";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {});
  }, []);

  return (
    <section>
      <h1>Bienvenido</h1>
    </section>
  );
}