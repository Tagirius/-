import React from 'react';

interface RadioGroupProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  label, 
  name, 
  options, 
  value, 
  onChange,
  error 
}) => {
  return (
    <div className="w-full mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option} className={`
            flex-1 flex items-center justify-center cursor-pointer px-4 py-3 rounded-lg border transition-all duration-200
            ${value === option 
              ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200' 
              : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}
          `}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <span className="font-medium">{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};