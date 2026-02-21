import css from "./WorkingWith.module.css";

export default function WorkingWith() {
  return (
    <section className={css.workingWith}>
      <div className={css.container}>
        <h2 className={css.title}>Працюємо з:</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <img
              src="/src/assets/images/WorkingWith/bosch-logo.png"
              alt="Bosch logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/src/assets/images/WorkingWith/continental-logo.png"
              alt="Continental logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/src/assets/images/WorkingWith/delphi-logo.png"
              alt="Delphi logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/src/assets/images/WorkingWith/denso-logo.png"
              alt="Denso logo"
              className={css.icon}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
