import css from "./PhotoPage.module.css";

export default function PhotoPage() {
  const photos = [
    { id: 1, src: "/img/Photo/photo1.jpg", alt: "Ремонт дизельних форсунок" },
    { id: 2, src: "/img/Photo/photo2.jpg", alt: "До і після ремонту форсунок" },
    { id: 3, src: "/img/Photo/photo3.jpg", alt: "Діагностика на стенді" },
    { id: 4, src: "/img/Photo/photo4.jpg", alt: "Ремонт ТНВД" },
    { id: 5, src: "/img/Photo/photo5.jpg", alt: "Роботи в майстерні" },
    { id: 6, src: "/img/Photo/photo6.jpg", alt: "Відремонтовані форсунки" },
    // Додай сюди більше фото, якщо є
  ];

  return (
    <div className={css.photoPage}>
      <div className={css.header}>
        <h1 className={css.title}>Наші роботи</h1>
        <p className={css.subtitle}>
          Реальні фото ремонту дизельних форсунок та паливної апаратури
        </p>
      </div>

      <div className={css.gallery}>
        {photos.map((photo) => (
          <div key={photo.id} className={css.photoItem}>
            <img
              src={photo.src}
              alt={photo.alt}
              className={css.photoImage}
              loading="lazy"
            />
            {/* <div className={css.overlay}>
              <p className={css.photoCaption}>{photo.alt}</p>
            </div> */}
          </div>
        ))}
      </div>

      <div className={css.note}>
        <p>
          Більше фото робіт можна побачити в наших соцмережах або при особистому
          візиті
        </p>
      </div>
    </div>
  );
}
