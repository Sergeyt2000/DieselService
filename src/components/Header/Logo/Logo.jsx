import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <a href="/" className={css.logoLink}>
        <img width={250} src="/img/logo.png" alt="Diesel Service Logo" />
      </a>
    </div>
  );
}
