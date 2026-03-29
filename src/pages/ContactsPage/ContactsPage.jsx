import Contacts from "../../components/Contacts/Contacts";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
    return (
      <div className={css.contactsPage}>
        <div className={css.content}>
          <Contacts />
          <div className={css.map}>
            <iframe
              title="Diesel Service Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d635.4497463900849!2d30.497141246214472!3d50.426216738384156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzM0LjQiTiAzMMKwMjknNTEuNCJF!5e0!3m2!1sru!2sua!4v1771588734321!5m2!1sru!2sua"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <div className={css.map_mobile}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d635.45012121719!2d30.497081991401657!3d50.42618880547584!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzM0LjQiTiAzMMKwMjknNTEuNCJF!5e0!3m2!1sru!2sua!4v1774784481290!5m2!1sru!2sua"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={css.map_dt}>
            <iframe
              title="Diesel Service Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d635.4497463900849!2d30.497141246214472!3d50.426216738384156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzM0LjQiTiAzMMKwMjknNTEuNCJF!5e0!3m2!1sru!2sua!4v1771588734321!5m2!1sru!2sua"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
      </div>
    );
}