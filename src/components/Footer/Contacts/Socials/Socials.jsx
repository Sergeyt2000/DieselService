import css from "./Socials.module.css";

export default function Socials() {
  return (
    <div className={css.socials}>
      <ul className={css.socialsList}>
        <li className={css.socialsItem}>
          <a href="https://www.instagram.com/diesel.van2025" target="_blank" rel="noopener noreferrer">
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/sprite.svg#icon-instagramm"></use>
            </svg>
          </a>
        </li>
        <li className={css.socialsItem}>
          <a href="https://www.facebook.com/dima.vancovich" target="_blank" rel="noopener noreferrer">
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li className={css.socialsItem}>
          <a href="https://twitter.com/diesel_van2025" target="_blank" rel="noopener noreferrer">
            <svg className={css.socialsIcon} width="24" height="24">
              <use href="/sprite.svg#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>      
    </div>
  );
}