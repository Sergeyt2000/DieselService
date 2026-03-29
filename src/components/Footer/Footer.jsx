import css from "./Footer.module.css";
import Logo from "../Header/Logo/Logo.jsx";
import Services from "./Services/Services.jsx";
import ContactsFooter from "./ContactsFooter/ContactsFooter.jsx";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.logo}>
          <Logo />
        </div>
        <Services />
        <ContactsFooter />
      </div>
    </footer>
  );
}
