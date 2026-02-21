import css from './Services.module.css';

export default function Services() {
  return (
    <div className={css.services}>
      <h2>Наші послуги</h2>
      <ul>
        <li>Діагностика форсунок</li>
        <li>Ремонт форсунок</li>
        <li>Кодування форсунок</li>
        <li>Діагностика ПНВТ</li>
        <li>Ремонт ПНВТ</li>
        <li>Перевірка rail</li>
        <li>Перевірка клапана PCV/DRV</li>
      </ul>
    </div>
  );
}
