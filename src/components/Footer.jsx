import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>{t('footer.rights')}</p>
                <p className="mono">thang.dev — built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
