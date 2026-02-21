import css from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import WorkingWith from "../../components/WorkingWith/WorkingWith.jsx";
import OurServices from "../../components/OurServices/OurServices.jsx";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <Hero />
      <OurServices />
      <WorkingWith />      
    </div>
  );
}
