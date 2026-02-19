import css from './Services.module.css';

export default function Services() {
  return (
    <div className={css.services}>
      <h2>Наші послуги</h2>
      <ul>
        <li>Ремонт дизельних двигунів</li>
        <li>Технічне обслуговування</li>
        <li>Діагностика та налаштування</li>
        <li>Продаж запчастин</li>
      </ul>
    </div>
  );
}
