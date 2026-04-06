import css from "./Contacts.module.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export default function Contacts() {
  return (
    <div className={css.container}>
      <div className={css.contacts}>
        <div className={css.info}>
          <h2 className={css.title}>Контакти</h2>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <BsTelephone size="1.1em" />
              <span className={css.label}>Телефон: </span>
              <a href="tel:+380685225547">+380685225547</a>
            </li>
            <li className={css.contactItem}>
              <BsTelephone size="1.1em" />
              <span className={css.label}>Телефон: </span>
              <a href="tel:+380931225542">+380931225542</a>
            </li>
            <li className={css.contactItem}>
              <MdOutlineEmail size="1.2em" />
              <span className={css.label}>Email: </span>
              <a href="mailto:diesel.van2025@gmail.com">
                diesel.van2025@gmail.com
              </a>
            </li>
            <li className={css.contactItem}>
              <GrLocation size="1.2em" />
              <span className={css.label}>Адреса:</span>
              <p>м. Київ, вул. Городня 13</p>
            </li>
          </ul>
        </div>
        <div className={css.schedule}>
          <h2 className={css.title}>Графік роботи</h2>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <MdAccessTime size="1.2em" />
              <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
            </li>
            <li className={css.contactItem}>
              <MdAccessTime size="1.2em" />
              <p>Субота: 10:00 - 16:00</p>
            </li>
            <li className={css.contactItem}>
              <AiOutlineHome size="1.2em" />
              <p>Неділя: Вихідний</p>
            </li>
          </ul>
        </div>
      </div>
      <p className={css.text}>Працюємо з Новою Поштою</p>
      <p className={css.text}>
        Приймаємо в ремонт сняті вузли з будь-якого міста України
      </p>
    </div>
  );
}
