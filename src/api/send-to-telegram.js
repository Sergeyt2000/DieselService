export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не дозволено' });
  }

  try {
    const { name, phone, car, service, date, comment } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Ім'я та телефон обов'язкові" });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram токен або chat_id не налаштовані');
      return res.status(500).json({ error: 'Сервер не налаштовано правильно' });
    }

    const message = `
🚗 <b>Нова заявка з сайту Diesel Service</b>

👤 Ім'я: <b>${name}</b>
📱 Телефон: <b>${phone}</b>
🚘 Авто: ${car || '—'}
🔧 Послуга: <b>${service}</b>
📅 Дата та час: ${date || '—'}
💬 Коментар: ${comment || '—'}

Відправлено з сайту: ${req.headers.origin || 'Diesel Service'}
    `.trim();

    const telegramRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (telegramRes.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await telegramRes.json();
      console.error('Telegram error:', errorData);
      return res.status(500).json({ error: 'Не вдалося відправити повідомлення' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Внутрішня помилка сервера' });
  }
}