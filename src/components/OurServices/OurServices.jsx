import { useState } from "react";
import css from "./OurServices.module.css";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";
import BookingModal from "../BookingModal/BookingModal.jsx";
// import tnvd from "../../assets/images/ServiceCard/tnvd.jpg";
// import injectors from "../../assets/images/ServiceCard/injectors.jpg";

export default function OurServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const decsriptionTNVD =
    "Виконуємо професійну діагностику та ремонт ПНВТ (Common rail) з точним дотриманням технологічних стандартів. На сучасному спеціалізованому обладнанні яке дозволяє швидко та якісно виконувати роботи.";
  const decsriptionInjectors =
    "Спеціалізуємось на обслуговуванні паливних систем легкових, вантажних автомобілів та спецтехніки. Пропонуємо швидку діагностику та професійний ремонт форсунок з виконанням усіх робіт протягом одного робочого дня.";
  return (
    <section className={css.ourServices}>
      <div className={css.container}>
        <h2 className={css.title}>Пропонуємо (Здійснюємо, Робимо)</h2>
        <ul className={css.servicesList}>
          <li className={css.serviceItem}>
            <ServiceCard
              url="/img/ServiceCard/injectors.jpg"
              alt="Ремонт форсунок"
              description={decsriptionInjectors}
            />
          </li>
          <li className={css.serviceItem}>
            <ServiceCard
              url="/img/ServiceCard/tnvd.jpg"
              alt="Ремонт ПНВТ"
              alt2="(Паливний насос високого тиску)"
              description={decsriptionTNVD}
            />
          </li>
        </ul>
        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Записатися
        </button>

        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
