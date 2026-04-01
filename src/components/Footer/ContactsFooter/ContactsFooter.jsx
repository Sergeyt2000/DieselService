import css from "./ContactsFooter.module.css";
import Socials from "./Socials/Socials.jsx";
import SocialNetworks from "./SocialNetworks/SocialNetworks.jsx";

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h2>Контакти</h2>
      <ul className={css.contactList}>
        <li>
          <a href="tel:+380685225547">+380685225547</a>
        </li>
        <li>
          <a href="tel:+380931225542">+380931225542</a>
        </li>
        <li>
          <a href="mailto:diesel.van2025@gmail.com">diesel.van2025@gmail.com</a>
        </li>
        <li>
          <p>м. Київ, вул. Городня 13</p>
        </li>
      </ul>
      <Socials />
      <SocialNetworks />
    </div>
  );
}
