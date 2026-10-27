import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

const Navbar = ({ activeSection }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t('nav.home'), href: '#home', id: 'home' },
        { name: t('nav.about'), href: '#about', id: 'about' },
        { name: t('nav.skills'), href: '#skills', id: 'skills' },
        { name: t('nav.projects'), href: '#projects', id: 'projects' },
        { name: t('nav.contact'), href: '#contact', id: 'contact' },
    ];

    return (
        <header className="nav">
            <div className="container nav-inner">
                <a href="#home" className="logo">thang<span>.dev</span></a>

                <nav className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href} className={activeSection === link.id ? 'active' : ''}>
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <ThemeToggle />
                    <LangToggle />
                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="mobile-menu">
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
