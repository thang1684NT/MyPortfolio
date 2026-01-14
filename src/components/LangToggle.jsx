import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LangToggle = () => {
    const { i18n } = useTranslation();

    const toggleLang = () => {
        const newLang = i18n.language === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLang}
            className="flex items-center gap-2"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '5px' }}
            aria-label="Switch Language"
        >
            <Languages size={24} />
            <span style={{ fontWeight: 'bold' }}>{i18n.language.toUpperCase()}</span>
        </button>
    );
};

export default LangToggle;
