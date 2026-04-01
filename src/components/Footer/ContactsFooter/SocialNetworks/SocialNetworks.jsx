import css from "./SocialNetworks.module.css";

export default function SocialNetworks() {
  return (
    <div className={css.socials}>
      <ul className={css.socialsList}>
        <li className={css.socialsItem}>
          <a
            href="https://t.me/diesel_van2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/icons/telegram.svg"></use>
            </svg>
          </a>
        </li>
        <li className={css.socialsItem}>
          <a
            href="https://wa.me/380685225547"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/icons/watsapp.svg"></use>
            </svg>
          </a>
        </li>
        <li className={css.socialsItem}>
          <a
            href="viber://chat?number=%2B380685225547"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/icons/viber.svg"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}