export interface ApplicantData {
  fullName: string;
  phone: string;
  age: string;
  citizenship: string;
  city: string;
  hasBiometricPassport: string; // "Да" | "Нет"
  visitedIsraelBefore: string; // "Да" | "Нет"
  hasRelativesInIsrael: string; // "Да" | "Нет"
  languages: string;
  skills: string;
  experienceAbroad: string;
  medicalRestrictions: string;
  travelDate: string;
  plannedWorkDuration: string;
  peopleCount: string;
  vacancy: string;
  notes: string;
}

export type FormField = keyof ApplicantData;