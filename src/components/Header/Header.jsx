import { useState } from "react";
// import { useEffect } from "react";
import css from "./Header.module.css";

import Logo from "./Logo/Logo.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [menuOpen]);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />

        {/* Бургер-меню (видимий тільки на мобілці) */}
        <BurgerMenu open={menuOpen} setOpen={setMenuOpen} />

        {/* Десктопна навігація */}
        <Navigation isMobile={false} />

        {/* Мобільне меню */}
        {menuOpen && (
          <div className={css.mobileMenu}>
            <Navigation isMobile={true} onLinkClick={closeMenu} />
          </div>
        )}
      </div>
    </header>
  );
}
