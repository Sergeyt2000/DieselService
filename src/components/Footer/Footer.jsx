import css from "./Footer.module.css";
import Logo from "../Header/Logo/Logo.jsx";
import Services from "./Services/Services.jsx";
import Contacts from "./Contacts/Contacts.jsx";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <Logo />
        <Services />
        <Contacts />
      </div>
    </footer>
  );
}
