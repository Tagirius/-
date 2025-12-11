import React, { useState } from 'react';
import { User, Phone, Briefcase, Calendar, Globe, Users, FileText, Clock, Activity, MessageCircle, MapPin, MessageSquare } from 'lucide-react';
import { Input } from './Input';
import { Select } from './Select';
import { RadioGroup } from './RadioGroup';
import { sendToWhatsApp } from '../utils/whatsapp';
import { ApplicantData } from '../types';
import { TranslationData } from '../translations';

const INITIAL_DATA: ApplicantData = {
  fullName: '',
  phone: '',
  age: '',
  citizenship: '',
  city: '',
  hasBiometricPassport: '',
  visitedIsraelBefore: '',
  hasRelativesInIsrael: '',
  languages: '',
  skills: '',
  experienceAbroad: '',
  medicalRestrictions: '',
  travelDate: '',
  plannedWorkDuration: '',
  peopleCount: '1',
  vacancy: '',
  notes: ''
};

interface ApplicantFormProps {
  t: TranslationData;
}

export const ApplicantForm: React.FC<ApplicantFormProps> = ({ t }) => {
  const [formData, setFormData] = useState<ApplicantData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicantData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ApplicantData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioChange = (name: keyof ApplicantData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicantData, string>> = {};
    
    // We can add simple validation messages here or pass them from translations if strictly needed.
    // For now, using generic or Russian defaults for error logic is okay, or we can map them.
    // To keep it simple and effective, let's use the field labels to indicate what is missing.
    
    if (!formData.fullName.trim()) newErrors.fullName = "!";
    if (!formData.phone.trim()) newErrors.phone = "!";
    if (!formData.age.trim()) newErrors.age = "!";
    if (!formData.citizenship) newErrors.citizenship = "!";
    if (!formData.city.trim()) newErrors.city = "!";
    if (!formData.hasBiometricPassport) newErrors.hasBiometricPassport = "!";
    if (!formData.visitedIsraelBefore) newErrors.visitedIsraelBefore = "!";
    if (!formData.hasRelativesInIsrael) newErrors.hasRelativesInIsrael = "!";
    if (!formData.travelDate) newErrors.travelDate = "!";
    if (!formData.plannedWorkDuration.trim()) newErrors.plannedWorkDuration = "!";
    if (!formData.vacancy) newErrors.vacancy = "!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = () => {
    if (validate()) {
      sendToWhatsApp(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/95">
      <div className="bg-blue-600 px-8 py-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-blue-100 text-sm md:text-base">
          {t.subtitle}
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-6 md:p-8 space-y-2">
        
        {/* Contact Info Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <Input 
            name="fullName"
            label={t.labels.fullName}
            placeholder={t.placeholders.fullName}
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName ? t.labels.fullName : undefined}
            icon={<User size={18} />}
          />
          <Input 
            name="phone"
            label={t.labels.phone}
            placeholder={t.placeholders.phone}
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone ? t.labels.phone : undefined}
            icon={<Phone size={18} />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <Input 
            name="age"
            label={t.labels.age}
            type="number"
            placeholder={t.placeholders.age}
            value={formData.age}
            onChange={handleChange}
            error={errors.age ? t.labels.age : undefined}
            min={18}
            max={70}
          />
          <Select 
            name="citizenship"
            label={t.labels.citizenship}
            options={t.citizenships}
            placeholder={t.placeholders.select}
            value={formData.citizenship}
            onChange={handleChange}
            error={errors.citizenship ? t.labels.citizenship : undefined}
            icon={<Globe size={18} />}
          />
        </div>

        <Input 
          name="city"
          label={t.labels.city}
          placeholder={t.placeholders.city}
          value={formData.city}
          onChange={handleChange}
          error={errors.city ? t.labels.city : undefined}
          icon={<MapPin size={18} />}
        />

        {/* Status Group */}
        <div className="pt-2">
          <RadioGroup 
            name="hasBiometricPassport"
            label={t.labels.biometric}
            options={[t.options.yes, t.options.no]}
            value={formData.hasBiometricPassport}
            onChange={(val) => handleRadioChange("hasBiometricPassport", val)}
            error={errors.hasBiometricPassport ? t.labels.biometric : undefined}
          />
          
          <RadioGroup 
            name="visitedIsraelBefore"
            label={t.labels.visitedIsrael}
            options={[t.options.yes, t.options.no]}
            value={formData.visitedIsraelBefore}
            onChange={(val) => handleRadioChange("visitedIsraelBefore", val)}
            error={errors.visitedIsraelBefore ? t.labels.visitedIsrael : undefined}
          />

          <RadioGroup 
            name="hasRelativesInIsrael"
            label={t.labels.relatives}
            options={[t.options.yes, t.options.no]}
            value={formData.hasRelativesInIsrael}
            onChange={(val) => handleRadioChange("hasRelativesInIsrael", val)}
            error={errors.hasRelativesInIsrael ? t.labels.relatives : undefined}
          />
        </div>

        {/* Professional Info */}
        <Input 
          name="languages"
          label={t.labels.languages}
          placeholder={t.placeholders.languages}
          value={formData.languages}
          onChange={handleChange}
        />
        
        <Input 
          name="skills"
          label={t.labels.skills}
          placeholder={t.placeholders.skills}
          value={formData.skills}
          onChange={handleChange}
          icon={<FileText size={18} />}
        />

        <Input 
          name="experienceAbroad"
          label={t.labels.experienceAbroad}
          placeholder={t.placeholders.experienceAbroad}
          value={formData.experienceAbroad}
          onChange={handleChange}
          icon={<Globe size={18} />}
        />

        <Input 
          name="medicalRestrictions"
          label={t.labels.medical}
          placeholder={t.placeholders.medical}
          value={formData.medicalRestrictions}
          onChange={handleChange}
          icon={<Activity size={18} />}
        />

        {/* Trip Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <Input 
            name="travelDate"
            label={t.labels.travelDate}
            type="date"
            value={formData.travelDate}
            onChange={handleChange}
            error={errors.travelDate ? t.labels.travelDate : undefined}
            icon={<Calendar size={18} />}
          />
          <Input 
            name="plannedWorkDuration"
            label={t.labels.duration}
            placeholder={t.placeholders.duration}
            value={formData.plannedWorkDuration}
            onChange={handleChange}
            error={errors.plannedWorkDuration ? t.labels.duration : undefined}
            icon={<Clock size={18} />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <Input 
            name="peopleCount"
            label={t.labels.peopleCount}
            type="number"
            min={1}
            value={formData.peopleCount}
            onChange={handleChange}
            icon={<Users size={18} />}
          />
          <Select 
            name="vacancy"
            label={t.labels.vacancy}
            options={t.vacancies}
            placeholder={t.placeholders.select}
            value={formData.vacancy}
            onChange={handleChange}
            error={errors.vacancy ? t.labels.vacancy : undefined}
            icon={<Briefcase size={18} />}
          />
        </div>

        <Input 
          name="notes"
          label={t.labels.notes}
          placeholder={t.placeholders.notes}
          value={formData.notes}
          onChange={handleChange}
          icon={<MessageSquare size={18} />}
        />

        {/* Submit Area */}
        <div className="mt-8 pt-4 border-t border-slate-100 space-y-4">
          <button 
            type="button"
            onClick={handleSend}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da851] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg shadow-green-200 hover:shadow-green-300 transform active:scale-[0.99]"
          >
            <MessageCircle size={24} />
            <span>{t.labels.submit}</span>
          </button>
          
          <p className="mt-4 text-xs text-center text-slate-400 leading-relaxed">
            {t.labels.agreement} 
            <br className="hidden sm:block" />
            {t.labels.redirect}
          </p>
        </div>

      </form>
    </div>
  );
};