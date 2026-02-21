import css from "./ContactsPage.module.css";

export default function ContactsPage() {
    return (
      <div className={css.contactsPage}>
        <div className={css.content}>
          <div>
            <div>
              <h1>Контакти</h1>
              <p>Телефон: +380685225547</p>
              <p>Телефон: +380931225542</p>
              <p>Email: diesel.van2025@gmail.com</p>
              <p>Адреса: вул. Городня, 13, Київ, Україна</p>
            </div>
            <div>
              <h2>Графік роботи</h2>
              <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
              <p>Субота: 10:00 - 16:00</p>
              <p>Неділя: Вихідний</p>
            </div>
            <p>Працюємо з Новою Поштою</p>
            <p>Приймаємо в ремонт сняті вузли з будь-якого міста України</p>
          </div>
          <div className={css.map}>
            <iframe
              title="Diesel Service Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d635.4497463900849!2d30.497141246214472!3d50.426216738384156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzM0LjQiTiAzMMKwMjknNTEuNCJF!5e0!3m2!1sru!2sua!4v1771588734321!5m2!1sru!2sua"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
}