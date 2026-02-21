import css from "./OurServices.module.css";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";
import tnvd from "../../assets/images/ServiceCard/tnvd.jpg";
import injectors from "../../assets/images/ServiceCard/injectors.jpg";

export default function OurServices() {
  const decsriptionTNVD =
    "Виконуємо демонтаж та професійне встановлення всіх типів ПНВТ з точним дотриманням технологічних стандартів. Сучасні підйомники та спеціалізоване обладнання дозволяють швидко та якісно виконувати роботи.";
  const decsriptionInjectors =
    "Спеціалізуємось на обслуговуванні паливних систем легкових, вантажних автомобілів та спецтехніки. Пропонуємо швидку діагностику та професійний ремонт форсунок з виконанням усіх робіт протягом одного робочого дня.";
  return (
    <section className={css.ourServices}>
      <div className={css.container}>
          <h2 className={css.title}>Займаємось, Робимо, Пропонуємо</h2>
          <ul className={css.servicesList}>
            <li className={css.serviceItem}>
              <ServiceCard
                url={tnvd}
                alt="Ремонт ПНВТ"
                description={decsriptionTNVD}
              />
            </li>
            <li className={css.serviceItem}>
              <ServiceCard
                url={injectors}
                alt="Ремонт форсунок"
                description={decsriptionInjectors}
              />
            </li>
          </ul>
      </div>
    </section>
  );
}
