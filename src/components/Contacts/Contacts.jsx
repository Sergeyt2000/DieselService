import css from "./Contacts.module.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export default function Contacts() {
  return (
    <div className={css.contactsContainer}>
      {/* <div className={css.header}>
        <h1 className={css.title}>Контакти</h1>
        <p className={css.subtitle}>Зв'яжіться з нами зручним способом</p>
      </div> */}

      <div className={css.contacts}>
        {/* Телефони */}
        <div className={css.block}>
          <h3 className={css.blockTitle}>Телефони</h3>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <BsTelephone size={24} className={css.icon} />
              <a href="tel:+380685225547" className={css.link}>
                +38 (068) 522-55-47
              </a>
            </li>
            <li className={css.contactItem}>
              <BsTelephone size={24} className={css.icon} />
              <a href="tel:+380931225542" className={css.link}>
                +38 (093) 122-55-42
              </a>
            </li>
          </ul>
        </div>

        {/* Email */}
        <div className={css.block}>
          <h3 className={css.blockTitle}>Email</h3>
          <a href="mailto:diesel.van2025@gmail.com" className={css.emailLink}>
            <MdOutlineEmail size={24} className={css.icon} />
            diesel.van2025@gmail.com
          </a>
        </div>

        {/* Адреса */}
        <div className={css.block}>
          <h3 className={css.blockTitle}>Адреса</h3>
          <div className={css.contactItem}>
            <GrLocation size={24} className={css.icon} />
            <p>м. Київ, вул. Городня, 13</p>
          </div>
        </div>

        {/* Графік роботи */}
        <div className={css.block}>
          <h3 className={css.blockTitle}>Графік роботи</h3>
          <ul className={css.scheduleList}>
            <li className={css.scheduleItem}>
              <MdAccessTime size={22} className={css.icon} />
              <span>Пн — Пт: 09:00 — 18:00</span>
            </li>
            <li className={css.scheduleItem}>
              <MdAccessTime size={22} className={css.icon} />
              <span>Субота: 10:00 — 16:00</span>
            </li>
            <li className={css.scheduleItem}>
              <AiOutlineHome size={22} className={css.icon} />
              <span>Неділя: Вихідний</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.delivery}>
        <p>
          <strong>Працюємо з Новою Поштою</strong>
        </p>
        <p>Приймаємо в ремонт зняті вузли з будь-якого міста України</p>
      </div>
    </div>
  );
}
