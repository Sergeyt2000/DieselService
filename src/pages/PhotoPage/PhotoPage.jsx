import css from "./PhotoPage.module.css";

export default function PhotoPage() {
  return (
    <div className={css.photoPage}>
      <div className={css.content}>
        <ul className={css.photoList}>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo1.jpg" alt="Photo 1" />
          </li>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo2.jpg" alt="Photo 2" />
          </li>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo3.jpg" alt="Photo 3" />
          </li>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo4.jpg" alt="Photo 4" />
          </li>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo5.jpg" alt="Photo 5" />
          </li>
          <li className={css.photoItem}>
            <img className={css.photoImage} src="/img/Photo/photo6.jpg" alt="Photo 6" />
          </li>
        </ul>
      </div>
    </div>
  );
}
