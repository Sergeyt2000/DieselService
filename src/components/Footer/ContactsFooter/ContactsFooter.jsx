import css from "./ContactsFooter.module.css";
import SocialNetworks from "./SocialNetworks/SocialNetworks.jsx";
import Socials from "./Socials/Socials.jsx";

export default function ContactsFooter() {
  return (
    <div className={css.contacts}>
      <h3 className={css.title}>Контакти</h3>

      <div className={css.contactInfo}>
        <a href="tel:+380685225547" className={css.contactLink}>
          +38 (068) 522-55-47
        </a>
        <a href="tel:+380931225542" className={css.contactLink}>
          +38 (093) 122-55-42
        </a>
        {/* <div className={css.socialWrapper}> */}
        <SocialNetworks />
        {/* </div> */}
        <a href="mailto:diesel.van2025@gmail.com" className={css.contactLink}>
          diesel.van2025@gmail.com
        </a>
        <p className={css.address}>м. Київ, вул. Городня, 13</p>
        <Socials />
      </div>
    </div>
  );
}
