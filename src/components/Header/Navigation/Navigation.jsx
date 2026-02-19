import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        <li className={css.item}>
          <a href="/about">Про нас</a>
        </li>
        <li className={css.item}>
          <a href="#">Послуги</a>
        </li>
        <li className={css.item}>
          <a href="#">Відгуки</a>
        </li>
        <li className={css.item}>
          <a href="/contacts">Контакти</a>
        </li>
      </ul>
    </nav>
  );
}
