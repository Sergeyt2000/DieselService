import { useState, useEffect } from 'react';
import css from './BookingModal.module.css';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: 'Ремонт форсунок',
    date: '',
    comment: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [phoneError, setPhoneError] = useState('');

  // Маска для телефону
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '').slice(0, 12);
    
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 5) return `+${numbers.slice(0,3)} ${numbers.slice(3)}`;
    if (numbers.length <= 8) return `+${numbers.slice(0,3)} ${numbers.slice(3,5)} ${numbers.slice(5)}`;
    return `+${numbers.slice(0,3)} ${numbers.slice(3,5)} ${numbers.slice(5,8)} ${numbers.slice(8,10)} ${numbers.slice(10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    setPhoneError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Закриття при натисканні Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const sendToTelegram = async (e) => {
    e.preventDefault();

    // Проста валідація телефону
    const phoneNumbers = formData.phone.replace(/\D/g, '');
    if (phoneNumbers.length < 12) {
      setPhoneError('Введіть повний номер телефону');
      return;
    }

    setStatus('sending');
    setPhoneError('');

    const message = `
🚗 <b>Нова заявка з сайту Diesel Service</b>

👤 Ім'я: <b>${formData.name}</b>
📱 Телефон: <b>${formData.phone}</b>
🚘 Авто: ${formData.car || '—'}
🔧 Послуга: <b>${formData.service}</b>
📅 Бажана дата: ${formData.date || '—'}
💬 Коментар: ${formData.comment || '—'}

Відправлено з сайту: ${window.location.href}
    `.trim();

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (res.ok) {
        setStatus('success');

        // Автозакриття через 3 секунди
        setTimeout(() => {
          onClose();
          // Скидання форми
          setFormData({
            name: '', phone: '', car: '', service: 'Ремонт форсунок', date: '', comment: ''
          });
          setStatus('idle');
        }, 2800);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>✕</button>

        <h2>Записатися на сервіс</h2>
        <p>Заповніть форму — ми зателефонуємо вам протягом 15 хвилин</p>

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
              onChange={handlePhoneChange}
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

          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="Ремонт форсунок">Ремонт форсунок Common Rail</option>
            <option value="Ремонт ПНВТ / ТНВД">Ремонт ПНВТ (ТНВД)</option>
            <option value="Діагностика">Діагностика паливної системи</option>
            <option value="Чистка форсунок">Ультразвукова чистка форсунок</option>
            <option value="Інше">Інше</option>
          </select>

          <input
            type="text"
            name="date"
            placeholder="Бажана дата та час (необов'язково)"
            value={formData.date}
            onChange={handleChange}
          />

          <textarea
            name="comment"
            placeholder="Опишіть проблему або побажання (необов'язково)"
            value={formData.comment}
            onChange={handleChange}
            rows={3}
          />

          <button 
            type="submit" 
            className={css.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Відправляємо заявку...' : 'Надіслати заявку'}
          </button>
        </form>

        {status === 'success' && (
          <div className={css.successMessage}>
            ✅ Заявка успішно відправлена!<br />
            Ми зателефонуємо вам найближчим часом.
          </div>
        )}

        {status === 'error' && (
          <div className={css.errorMessage}>
            ❌ Щось пішло не так. Спробуйте ще раз або зателефонуйте нам напряму.
          </div>
        )}
      </div>
    </div>
  );
}