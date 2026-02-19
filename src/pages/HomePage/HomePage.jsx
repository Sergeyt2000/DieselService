import css from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero.jsx";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <Hero />
      <h1>Головна сторінка</h1>
    </div>
  );
}
