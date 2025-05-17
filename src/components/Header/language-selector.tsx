import { useState, useEffect, useRef } from "react";

type Language = {
  code: string;
  name: string;
};

type LanguageSelectorProps = {
  onChange?: (language: Language) => void;
  initialLanguage?: string;
};

export function LanguageSelector({ onChange, initialLanguage = "dk" }: LanguageSelectorProps) {
  const languages: Language[] = [
    { code: "dk", name: "Danish" },
    { code: "en", name: "English" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === initialLanguage.toLowerCase()) || languages[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onChange?.(language);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-transparent border border-white text-white rounded-full py-2 px-3 text-sm flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage.code.toUpperCase()}
        <svg
          className={`ml-1 w-2.5 h-1.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 ">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer ${
                  selectedLanguage.code === language.code ? "font-medium bg-gray-50" : ""
                }`}
                role="menuitem"
                onClick={() => handleLanguageChange(language)}
              >
                <span className="mr-2">{language.code.toUpperCase()}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
