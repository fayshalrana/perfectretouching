import React, { useState } from "react";
import './LanguageSelector.css';
import { TiArrowSortedDown } from "react-icons/ti";
const languages = [
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'ar', name: 'Arabic', countryCode: 'ae' },
  { code: 'da', name: 'Danish', countryCode: 'dk' },
  { code: 'nl', name: 'Dutch', countryCode: 'nl' },
  { code: 'fi', name: 'Finnish', countryCode: 'fi' },
  { code: 'fr', name: 'French', countryCode: 'fr' },
  { code: 'de', name: 'German', countryCode: 'de' },
  { code: 'he', name: 'Hebrew', countryCode: 'il' },
  { code: 'it', name: 'Italian', countryCode: 'it' },
  { code: 'ja', name: 'Japanese', countryCode: 'jp' },
  { code: 'no', name: 'Norwegian', countryCode: 'no' },
  { code: 'pl', name: 'Polish', countryCode: 'pl' },
  { code: 'pt', name: 'Portuguese', countryCode: 'pt' },
  { code: 'es', name: 'Spanish', countryCode: 'es' },
  { code: 'sv', name: 'Swedish', countryCode: 'se' },
  { code: 'ru', name: 'Russian', countryCode: 'ru' },
];

const columns = [
  [0, 8], // first 8
  [8, 16], // next 8
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="lang-selector h-full group">
      <button 
        className="lang-btn hover:bg-gray-100 h-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="w-[20px] h-[20px] rounded-full overflow-hidden mr-[8px]">
          <img
            className="lang-flag w-full h-full object-cover flex items-center justify-center"
            src={`https://flagcdn.com/24x18/${selected.countryCode}.png`}
            alt={selected.name + ' flag'}
            width="24"
            height="24"
          />
        </div>
        <span className="lang-name text-[14px] font-light text-black leading-[20px]">{selected.name}</span>
        <span className="lang-arrow"><TiArrowSortedDown className="text-[16px]"/></span>
      </button>
      <div 
        className={`lang-dropdown -left-[100%] md:left-0 ${open ? 'block' : 'hidden'}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="lang-columns py-5">
          {columns.map(([start, end], i) => (
            <div className="lang-col" key={i}>
              {languages.slice(start, end).map(lang => (
                <div
                  className="lang-item"
                  key={lang.code}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                >
                  <img
                    className="lang-flag"
                    src={`https://flagcdn.com/24x18/${lang.countryCode}.png`}
                    alt={lang.name + ' flag'}
                    width="24"
                    height="18"
                  />
                  <span className="lang-name">{lang.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 