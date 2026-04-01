import css from "./WorkingWith.module.css";
// import boschLogo from "../../assets/images/WorkingWith/bosch-logo.png";
// import continentalLogo from "../../assets/images/WorkingWith/continental-logo.png";
// import delphiLogo from "../../assets/images/WorkingWith/delphi-logo.png";
// import densoLogo from "../../assets/images/WorkingWith/denso-logo.png";

export default function WorkingWith() {
  return (
    <section className={css.workingWith}>
      <div className={css.container}>
        <h2 className={css.title}>Працюємо з:</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <img
              src="/img/WorkingWith/bosch-logo.png"
              alt="Bosch logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/img/WorkingWith/continental-logo.png"
              alt="Continental logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/img/WorkingWith/delphi-logo.png"
              alt="Delphi logo"
              className={css.icon}
            />
          </li>
          <li className={css.item}>
            <img
              src="/img/WorkingWith/denso-logo.png"
              alt="Denso logo"
              className={css.icon}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
