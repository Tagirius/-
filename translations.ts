export type Language = 'ru' | 'ua' | 'en';

export interface TranslationData {
  selectLanguage: string;
  title: string;
  subtitle: string;
  labels: {
    fullName: string;
    phone: string;
    age: string;
    citizenship: string;
    city: string;
    biometric: string;
    visitedIsrael: string;
    relatives: string;
    languages: string;
    skills: string;
    experienceAbroad: string;
    medical: string;
    travelDate: string;
    duration: string;
    peopleCount: string;
    vacancy: string;
    notes: string;
    submit: string;
    agreement: string;
    redirect: string;
  };
  placeholders: {
    fullName: string;
    phone: string;
    age: string;
    city: string;
    languages: string;
    skills: string;
    experienceAbroad: string;
    medical: string;
    duration: string;
    notes: string;
    select: string;
  };
  options: {
    yes: string;
    no: string;
  };
  citizenships: string[];
  vacancies: string[];
}

export const translations: Record<Language, TranslationData> = {
  ru: {
    selectLanguage: "Выберите подходящий для вас язык",
    title: "Анкета соискателя",
    subtitle: "Оставьте заявку, и мы свяжемся с вами в ближайшее время для консультации.",
    labels: {
      fullName: "Ваше имя",
      phone: "Номер телефона (WhatsApp / Telegram)",
      age: "Возраст",
      citizenship: "Гражданство",
      city: "Город проживания",
      biometric: "Биометрический загранпаспорт",
      visitedIsrael: "Были ли ранее в Израиле?",
      relatives: "Наличие родственников в Израиле?",
      languages: "Знание языков",
      skills: "Проф. навыки",
      experienceAbroad: "Опыт работы за границей",
      medical: "Особые медицинские ограничения?",
      travelDate: "Когда планируете поездку?",
      duration: "Планируемый срок работы?",
      peopleCount: "Количество человек",
      vacancy: "Интересующая вакансия",
      notes: "Примечания / комментарии",
      submit: "Отправить заявку",
      agreement: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
      redirect: "Вы будете перенаправлены в WhatsApp."
    },
    placeholders: {
      fullName: "Иван Иванов",
      phone: "+7 999 000-00-00",
      age: "25",
      city: "Например: Москва",
      languages: "Английский (базовый), Русский",
      skills: "Водитель, Сварщик...",
      experienceAbroad: "Нет / Польша (1 год)...",
      medical: "Нет / Аллергия, давление...",
      duration: "Например: 1 год",
      notes: "Дополнительная информация...",
      select: "Выберите..."
    },
    options: { yes: "Да", no: "Нет" },
    citizenships: ["РФ", "Беларусь", "Казахстан", "Украина", "Молдова", "Узбекистан", "Таджикистан", "Кыргызстан", "Другое"],
    vacancies: ["Строитель (общестрой)", "Сварщик", "Водитель", "Электрик", "Уборка помещений", "Уход за пожилыми", "Работник склада", "Повар / Помощник повара", "Другое"]
  },
  ua: {
    selectLanguage: "Оберіть зручну для вас мову",
    title: "Анкета шукача",
    subtitle: "Залиште заявку, і ми зв'яжемося з вами найближчим часом для консультації.",
    labels: {
      fullName: "Ваше ім'я",
      phone: "Номер телефону (WhatsApp / Telegram)",
      age: "Вік",
      citizenship: "Громадянство",
      city: "Місто проживання",
      biometric: "Біометричний закордонний паспорт",
      visitedIsrael: "Чи були раніше в Ізраїлі?",
      relatives: "Наявність родичів в Ізраїлі?",
      languages: "Знання мов",
      skills: "Проф. навички",
      experienceAbroad: "Досвід роботи за кордоном",
      medical: "Особливі медичні обмеження?",
      travelDate: "Коли плануєте поїздку?",
      duration: "Планований термін роботи?",
      peopleCount: "Кількість осіб",
      vacancy: "Вакансія, що цікавить",
      notes: "Примітки / коментарі",
      submit: "Відправити заявку",
      agreement: "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.",
      redirect: "Ви будете перенаправлені в WhatsApp."
    },
    placeholders: {
      fullName: "Іван Іванов",
      phone: "+380 99 000 00 00",
      age: "25",
      city: "Наприклад: Київ",
      languages: "Англійська (базова), Українська",
      skills: "Водій, Зварювальник...",
      experienceAbroad: "Ні / Польща (1 рік)...",
      medical: "Ні / Алергія, тиск...",
      duration: "Наприклад: 1 рік",
      notes: "Додаткова інформація...",
      select: "Оберіть..."
    },
    options: { yes: "Так", no: "Ні" },
    citizenships: ["Україна", "Молдова", "Казахстан", "Узбекистан", "Таджикистан", "Киргизстан", "Грузія", "Азербайджан", "Інше"],
    vacancies: ["Будівельник", "Зварювальник", "Водій", "Електрик", "Прибирання приміщень", "Догляд за літніми людьми", "Працівник складу", "Кухар / Помічник кухаря", "Інше"]
  },
  en: {
    selectLanguage: "Choose a language suitable for you",
    title: "Job Application",
    subtitle: "Leave a request, and we will contact you shortly for a consultation.",
    labels: {
      fullName: "Full Name",
      phone: "Phone Number (WhatsApp / Telegram)",
      age: "Age",
      citizenship: "Citizenship",
      city: "City of Residence",
      biometric: "Biometric Passport",
      visitedIsrael: "Have you been to Israel before?",
      relatives: "Relatives in Israel?",
      languages: "Languages",
      skills: "Professional Skills",
      experienceAbroad: "Experience Abroad",
      medical: "Medical Restrictions?",
      travelDate: "Planned Travel Date",
      duration: "Planned Work Duration",
      peopleCount: "Number of People",
      vacancy: "Interested Vacancy",
      notes: "Notes / Comments",
      submit: "Submit Application",
      agreement: "By clicking the button, you agree to the processing of personal data.",
      redirect: "You will be redirected to WhatsApp."
    },
    placeholders: {
      fullName: "John Doe",
      phone: "+1 234 567 8900",
      age: "25",
      city: "Example: London",
      languages: "English (Basic)",
      skills: "Driver, Welder...",
      experienceAbroad: "No / Poland (1 year)...",
      medical: "No / Allergies...",
      duration: "Example: 1 year",
      notes: "Additional information...",
      select: "Select..."
    },
    options: { yes: "Yes", no: "No" },
    citizenships: ["Ukraine", "Moldova", "Kazakhstan", "Uzbekistan", "Tajikistan", "Kyrgyzstan", "Georgia", "Azerbaijan", "Other", "Russia", "Belarus"],
    vacancies: ["Construction Worker", "Welder", "Driver", "Electrician", "Cleaning", "Elderly Care", "Warehouse Worker", "Cook / Assistant Cook", "Other"]
  }
};