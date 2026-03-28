import css from "./Navigation.module.css";

export default function Navigation({ isMobile = false, onLinkClick }) {
  const handleClick = (e) => {
    if (onLinkClick) {
      onLinkClick(); // закриваємо меню після кліку
    }
  };

  return (
    <nav
      className={`${css.navigation} ${isMobile ? css.mobileNav : css.desktopNav}`}
    >
      <ul className={css.list}>
        <li className={css.item}>
          <a href="/" onClick={handleClick}>
            Головна
          </a>
        </li>
        <li className={css.item}>
          <a href="/about" onClick={handleClick}>
            Про нас
          </a>
        </li>
        <li className={css.item}>
          <a href="/contacts" onClick={handleClick}>
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
}
