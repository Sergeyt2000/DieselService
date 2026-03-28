import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={css.container}>
      <div className={css.contacts}>
        <div className={css.info}>
          <h2>Контакти</h2>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <span className={css.label}>Телефон: </span>
              <a href="tel:+380685225547">+380685225547</a>
            </li>
            <li className={css.contactItem}>
              <span className={css.label}>Телефон: </span>
              <a href="tel:+380931225542">+380931225542</a>
            </li>
            <li className={css.contactItem}>
              <span className={css.label}>Email: </span>
              <a href="mailto:diesel.van2025@gmail.com">
                diesel.van2025@gmail.com
              </a>
            </li>
            <li className={css.contactItem}>
              <span className={css.label}>Адреса:</span>
              <p>м. Київ, вул. Городня 13</p>
            </li>
          </ul>
        </div>
        <div className={css.schedule}>
          <h2>Графік роботи</h2>
          <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
          <p>Субота: 10:00 - 16:00</p>
          <p>Неділя: Вихідний</p>
        </div>
      </div>
          <p className={css.text}>Працюємо з Новою Поштою</p>
          <p className={css.text}>
            Приймаємо в ремонт сняті вузли з будь-якого міста України
          </p>
    </div>
  );
}
