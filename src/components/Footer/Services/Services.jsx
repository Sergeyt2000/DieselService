import css from "./Services.module.css";

export default function Services() {
  return (
    <div className={css.services}>
      <h3 className={css.title}>Наші послуги</h3>
      <ul className={css.servicesList}>
        <li>Діагностика форсунок Common Rail</li>
        <li>Ремонт дизельних форсунок</li>
        <li>Кодування та калібрування форсунок</li>
        <li>Діагностика та ремонт ТНВД / ПНВТ</li>
        <li>Перевірка та ремонт рейки Common Rail</li>
        <li>Діагностика клапана PCV / DRV</li>
        <li>Ультразвукова чистка форсунок</li>
      </ul>
    </div>
  );
}
