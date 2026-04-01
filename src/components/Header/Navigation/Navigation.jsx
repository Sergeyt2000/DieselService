import css from "./Navigation.module.css";
import { useLocation } from "react-router-dom";

export default function Navigation({ isMobile = false, onLinkClick }) {
  const location = useLocation();
  const handleClick = (e) => {
    if (onLinkClick) {
      onLinkClick(); // закриваємо меню після кліку
    }
  };
const isActive = (path) => {
  if (path === "/") {
    return location.pathname === "/";
  }
  return location.pathname.startsWith(path);
};
  return (
    <nav
      className={`${css.navigation} ${isMobile ? css.mobileNav : css.desktopNav}`}
    >
      <ul className={css.list}>
        <li className={css.item}>
          <a
            href="/"
            onClick={handleClick}
            className={isActive("/") ? css.active : ""}
          >
            Головна
          </a>
        </li>
        <li className={css.item}>
          <a
            href="/about"
            onClick={handleClick}
            className={isActive("/about") ? css.active : ""}
          >
            Про нас
          </a>
        </li>
        <li className={css.item}>
          <a
            href="/contacts"
            onClick={handleClick}
            className={isActive("/contacts") ? css.active : ""}
          >
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
}
