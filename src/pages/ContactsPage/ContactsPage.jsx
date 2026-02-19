import css from "./ContactsPage.module.css";

export default function ContactsPage() {
    return (
      <div className={css.contactsPage}>
        <h1>Контакти</h1>
        <p>Телефон: +380685225547</p>
        <p>Телефон: +380931225542</p>
        <p>Email: diesel.van2025@gmail.com</p>
        <p>Адреса: вул. Городня, 13, Київ, Україна</p>

        <div className={css.map}>
          <iframe
            title="Diesel Service Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d635.4491502217495!2d30.49697629036006!3d50.42626116608553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzM0LjQiTiAzMMKwMjknNTEuNCJF!5e0!3m2!1sru!2sua!4v1771515859100!5m2!1sru!2sua"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
}