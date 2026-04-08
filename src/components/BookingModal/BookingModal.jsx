import { useState } from "react";
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
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Скидаємо помилку телефону при зміні
    if (name === "phone") {
      setPhoneError("");
    }
  };

  const sendToTelegram = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setPhoneError("");

    // Перевірка телефону
    const phoneClean = formData.phone.replace(/\D/g, "");
    if (phoneClean.length < 9) {
      setPhoneError("Введіть коректний номер телефону");
      setStatus("idle");
      return;
    }

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Перевірка наявності токена
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("❌ Telegram credentials не знайдено в .env");
      setStatus("error");
      return;
    }

    const message = `
🚗 <b>Нова заявка з сайту Diesel Service</b>

👤 Ім'я: <b>${formData.name}</b>
📱 Телефон: <b>${formData.phone}</b>
🚘 Авто: ${formData.car || "—"}
🔧 Послуга: <b>${formData.service}</b>
📅 Дата та час: ${formData.date || "—"}
💬 Коментар: ${formData.comment || "—"}

🌐 Відправлено з: ${window.location.origin}
    `.trim();

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

        // Автозакриття модального вікна через 2.8 секунди
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
        }, 2800);
      } else {
        setStatus("error");
        console.error("Telegram API error");
      }
    } catch (err) {
      console.error("Помилка під час відправки:", err);
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

          <div className={css.phoneWrapper}>
            <input
              type="tel"
              name="phone"
              placeholder="+380 XX XXX XX XX *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {phoneError && <span className={css.errorText}>{phoneError}</span>}
          </div>

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
            <option value="Діагностика автомобіля">Комп'ютерна діагностика автомобіля</option>
            <option value="Інше">Інше</option>
          </select>

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
            ❌ Помилка відправки. Спробуйте ще раз або зателефонуйте нам.
          </p>
        )}
      </div>
    </div>
  );
}
