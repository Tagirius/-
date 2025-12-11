import React, { useMemo, useState } from 'react';
import { ApplicantForm } from './components/ApplicantForm';
import { translations, Language } from './translations';

const BACKGROUND_IMAGES = [
  // Happy woman, professional, outdoors - vibrant colors
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  // Man, construction/engineer, smiling - bright helmet
  "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=600&q=80",
  // Woman, medical/care - bright scrubs/smile
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  // Man, welder/factory, positive
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
  // Happy group/team success - emotional
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  // Woman, casual, happy, sun - very bright
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  // Man, mature, confident
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  // Woman, chef/kitchen - bright white
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
  // Man, warehouse/logistics
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  // Young woman, student/travel - bright sky
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  // Man, older, friendly
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  // Woman, business/office
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  // Man, casual, travel - nature background
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  // Team, high five, success
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  // Woman, engineer
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
  // Man, agriculture/outdoor - bright green
  "https://images.unsplash.com/photo-1505058097232-2d10c1c463f8?auto=format&fit=crop&w=600&q=80",
  // Woman, happy traveler
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  // Man, smiling, european
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  // Woman, smiling, glasses
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  // Group, laughing - very emotional
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
];

const BackgroundCollage = () => {
  // Use useMemo to generate stable rotations so they don't change on re-renders
  const imagesWithStyle = useMemo(() => {
    // Duplicate the array to ensure enough coverage for larger screens
    const allImages = [...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES.slice(0, 10)];
    
    return allImages.map((src, i) => {
      // Deterministic pseudo-random values based on index
      const rotation = ((i * 13) % 11) - 5; // Range approx -5 to 5 deg
      const scale = 1 + ((i * 7) % 5) / 100; // Slight scale variance
      
      return { src, rotation, scale, id: i };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
      <div className="absolute inset-0 w-full h-full overflow-y-auto no-scrollbar">
        {/* Increased opacity for brighter look */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 p-4 opacity-95">
          {imagesWithStyle.map(({ src, rotation, scale, id }) => (
            <div key={id} className="mb-4 break-inside-avoid">
              <img 
                src={src} 
                alt="Background" 
                loading="lazy"
                // Removed grayscale, kept shadow and added hover effect
                className="w-full rounded-2xl shadow-lg transition-transform duration-700 ease-in-out object-cover hover:scale-[1.02]"
                style={{
                  transform: `rotate(${rotation}deg) scale(${scale})`
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lighter overlays to let colors pop */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-blue-100/40"></div>
    </div>
  );
};

const LanguageSwitcher = ({ current, onChange }: { current: Language; onChange: (lang: Language) => void }) => {
  const t = translations[current];
  
  return (
    <div className="max-w-2xl mx-auto mb-6 text-center animate-fade-in">
      <label className="block text-slate-700 font-medium mb-3 text-sm uppercase tracking-wide opacity-80">
        {t.selectLanguage}
      </label>
      <div className="inline-flex bg-white/80 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-slate-200/60">
        <button
          onClick={() => onChange('ru')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            current === 'ru' 
              ? 'bg-blue-600 text-white shadow-md transform scale-105' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🇷🇺 Русский
        </button>
        <button
          onClick={() => onChange('ua')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            current === 'ua' 
              ? 'bg-blue-600 text-white shadow-md transform scale-105' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🇺🇦 Українська
        </button>
        <button
          onClick={() => onChange('en')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            current === 'en' 
              ? 'bg-blue-600 text-white shadow-md transform scale-105' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🇬🇧 English
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');

  return (
    <div className="min-h-screen relative">
      <BackgroundCollage />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Language Switcher */}
        <LanguageSwitcher current={lang} onChange={setLang} />

        {/* Main Content */}
        <main className="mb-12">
          <ApplicantForm t={translations[lang]} />
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-6 font-medium relative z-20">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;