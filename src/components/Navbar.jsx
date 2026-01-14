import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

const Navbar = ({ activeSection }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '#home', id: 'home' },
        { name: t('nav.about'), href: '#about', id: 'about' },
        { name: t('nav.skills'), href: '#skills', id: 'skills' },
        { name: t('nav.projects'), href: '#projects', id: 'projects' },
        { name: t('nav.contact'), href: '#contact', id: 'contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: scrolled ? '0.8rem 0' : '1.5rem 0',
            background: scrolled ? 'var(--bg-nav)' : 'transparent',
            backdropFilter: scrolled ? 'blur(15px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-glow)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: 'translateZ(0)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                }}>
                    <div style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '0.8rem',
                        display: 'flex',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                    }}>
                        <Terminal size={20} />
                    </div>
                    <span style={{ letterSpacing: '-1px' }}>THANG<span className="text-gradient">.DEV</span></span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'none' }} className="nav-desktop">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '800',
                                        textDecoration: 'none',
                                        color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                                        transition: 'var(--transition)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1.2px',
                                        position: 'relative',
                                        padding: '0.5rem 0'
                                    }}
                                >
                                    {/* Fix: Wrap the text in a span that uses the text-gradient class if active */}
                                    <span className={isActive ? "text-gradient" : ""}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            background: 'var(--primary)',
                                            borderRadius: '2px',
                                            animation: 'slideIn 0.3s forwards'
                                        }}></div>
                                    )}
                                </a>
                            );
                        })}
                        <div style={{ width: '1px', height: '20px', background: 'var(--border-glow)' }}></div>
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            <ThemeToggle />
                            <LangToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'none' }}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="glass fade-in" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '1rem',
                    right: '1rem',
                    padding: '2rem',
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                    background: 'var(--bg-nav)'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: '800',
                                textDecoration: 'none',
                                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-primary)'
                            }}
                        >
                            <span className={activeSection === link.id ? "text-gradient" : ""}>
                                {link.name}
                            </span>
                        </a>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glow)' }}>
                        <ThemeToggle />
                        <LangToggle />
                    </div>
                </div>
            )}

            <style>{`
                .nav-desktop { display: flex !important; }
                .nav-mobile-btn { display: none !important; }
                
                @keyframes slideIn {
                    from { width: 0; left: 50%; opacity: 0; }
                    to { width: 100%; left: 0; opacity: 1; }
                }

                @media (max-width: 992px) {
                    .nav-desktop { display: none !important; }
                    .nav-mobile-btn { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
