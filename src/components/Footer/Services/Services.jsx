import css from './Services.module.css';

export default function Services() {
  return (
    <div className={css.services}>
      <h2 className={css.title}>Наші послуги</h2>
      <ul className={css.servicesList}>
        <li className={css.serviceItem}>Діагностика форсунок</li>
        <li className={css.serviceItem}>Ремонт форсунок</li>
        <li className={css.serviceItem}>Кодування форсунок</li>
        <li className={css.serviceItem}>Діагностика ПНВТ</li>
        <li className={css.serviceItem}>Ремонт ПНВТ</li>
        <li className={css.serviceItem}>Перевірка rail</li>
        <li className={css.serviceItem}>Перевірка клапана PCV/DRV</li>
      </ul>
    </div>
  );
}
