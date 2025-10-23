import "./Home.css";
import ocarinaImg from "../../assets/ocarina.png";

export const Home = () => {
  return (
    <section className="home-container">
      <img src={ocarinaImg} alt="Ocarina" className="home-image" />
      <h1>Bienvenido a Ocarina Store</h1>
      <p>La mejor tienda de internet 🎵</p>
    </section>
  );
};
