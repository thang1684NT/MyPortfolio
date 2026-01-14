import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Dispatch a custom event to sync other toggles if any
        window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
    }, [theme]);

    useEffect(() => {
        const handleThemeChange = (e) => {
            if (e.detail !== theme) {
                setTheme(e.detail);
            }
        };
        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glow)',
                cursor: 'none',
                color: 'var(--text-primary)',
                padding: '0.6rem',
                borderRadius: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
            }}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};

export default ThemeToggle;
