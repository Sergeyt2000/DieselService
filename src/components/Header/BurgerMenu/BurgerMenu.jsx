import css from "./BurgerMenu.module.css";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <button
      type="button"
      className={`${css.burger} ${open ? css.open : ""}`}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Закрити меню" : "Відкрити меню"}
    >
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </button>
  );
}
