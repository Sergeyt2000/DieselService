import { useState } from "react";
// import css from "./BookingModal.module.css";
import css from "./BookingModal_white.module.css";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "Ремонт форсунок",
    date: "",
    comment: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const message = `
🚗 <b>Нова заявка на запис!</b>

👤 Ім'я: ${formData.name}
📱 Телефон: ${formData.phone}
🚘 Авто: ${formData.car || "—"}
🔧 Послуга: ${formData.service}
📅 Бажана дата/час: ${formData.date || "—"}
💬 Коментар: ${formData.comment || "—"}
    `.trim();

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        },
      );

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setFormData({
            name: "",
            phone: "",
            car: "",
            service: "Ремонт форсунок",
            date: "",
            comment: "",
          });
          setStatus("idle");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2>Записатися на СТО</h2>
        <p>Заповніть форму, ми зателефонуємо вам протягом 15 хвилин</p>

        <form onSubmit={sendToTelegram}>
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="+380 XX XXX XX XX *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="car"
            placeholder="Марка та модель авто"
            value={formData.car}
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="Ремонт форсунок">Ремонт форсунок</option>
            <option value="Ремонт ПНВТ / ТНВД">Ремонт ПНВТ / ТНВД</option>
            <option value="Діагностика">Діагностика паливної системи</option>
            <option value="Інше">Інше</option>
          </select>

          {/* <input
            type="text"
            name="date"
            placeholder="Бажана дата / час"
            value={formData.date}
            onChange={handleChange}
          /> */}
          {/* Поле дати та часу */}
          <div className={css.dateWrapper}>
            <label htmlFor="date">Бажана дата та час</label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={css.dateInput}
            />
            <small className={css.hint}>
              Оберіть зручний день і час. Ми підтвердимо по телефону.
            </small>
          </div>

          <textarea
            name="comment"
            placeholder="Опишіть проблему (необов'язково)"
            value={formData.comment}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={css.submitBtn}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Відправляємо..." : "Надіслати заявку"}
          </button>
        </form>

        {status === "success" && (
          <p className={css.success}>
            ✅ Заявка відправлена! Ми скоро зв'яжемося з вами.
          </p>
        )}
        {status === "error" && (
          <p className={css.error}>
            ❌ Помилка. Спробуйте ще раз або зателефонуйте нам.
          </p>
        )}
      </div>
    </div>
  );
}

