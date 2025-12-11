import { ApplicantData } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const formatMessage = (data: ApplicantData): string => {
  return `
*Новая анкета соискателя* 📋

👤 *Имя:* ${data.fullName}
📱 *Телефон:* ${data.phone}
🎂 *Возраст:* ${data.age}
🌍 *Гражданство:* ${data.citizenship}
🏠 *Город:* ${data.city}

🛂 *Биометрический паспорт:* ${data.hasBiometricPassport}
🇮🇱 *Ранее были в Израиле?* ${data.visitedIsraelBefore}
👨‍👩‍👧 *Родственники в Израиле?* ${data.hasRelativesInIsrael}

🗣️ *Языки:* ${data.languages}
🛠️ *Навыки:* ${data.skills}
✈️ *Опыт за границей:* ${data.experienceAbroad || 'Не указан'}
🏥 *Мед. ограничения:* ${data.medicalRestrictions || 'Нет'}

📅 *Дата поездки:* ${data.travelDate}
⏱️ *Срок работы:* ${data.plannedWorkDuration}
👥 *Кол-во человек:* ${data.peopleCount}

💼 *Вакансия:* ${data.vacancy}
📝 *Примечания:* ${data.notes || '-'}
`.trim();
};

export const sendToWhatsApp = (data: ApplicantData) => {
  const text = formatMessage(data);
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  window.open(url, '_blank');
};