import React, { useState, useRef, useEffect } from "react";
import './LanguageSelector.css';

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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lang-selector" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)}>
        <img
          className="lang-flag"
          src={`https://flagcdn.com/24x18/${selected.countryCode}.png`}
          alt={selected.name + ' flag'}
          width="24"
          height="18"
        />
        <span className="lang-name">{selected.name}</span>
        <span className="lang-arrow">▼</span>
      </button>
      {open && (
        <div className="lang-dropdown">
          <div className="lang-columns">
            {columns.map(([start, end], i) => (
              <div className="lang-col" key={i}>
                {languages.slice(start, end).map(lang => (
                  <div
                    className="lang-item"
                    key={lang.code}
                    onClick={() => { setSelected(lang); setOpen(false); }}
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
      )}
    </div>
  );
} 