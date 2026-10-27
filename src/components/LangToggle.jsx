import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LangToggle = () => {
    const { i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
    };

    return (
        <button onClick={toggleLang} className="lang-btn" aria-label="Switch language">
            <Languages size={16} />
            <span>{(i18n.language || 'vi').toUpperCase()}</span>
        </button>
    );
};

export default LangToggle;
