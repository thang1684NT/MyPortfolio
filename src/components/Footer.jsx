import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>{t('footer.rights')}</p>
        </footer>
    );
};

export default Footer;
