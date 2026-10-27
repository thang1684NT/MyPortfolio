import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    const stats = [
        { num: '20+', lbl: t('hero.stat_tech') },
        { num: '2', lbl: t('hero.stat_projects') },
        { num: '3.2', lbl: t('hero.stat_gpa') },
    ];

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-badge reveal in">
                    <span className="dot"></span>
                    {t('hero.badge')}
                </div>

                <h1>
                    {t('hero.greeting')}<br />
                    <span className="accent">{t('hero.name')}</span>
                </h1>

                <p className="hero-role">
                    &gt;_ <b>{t('hero.role')}</b> — Java · Spring Boot · ASP.NET Core · React
                </p>

                <p className="hero-desc">{t('hero.description')}</p>

                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                        {t('hero.cta')} <ArrowRight size={17} />
                    </a>
                    <a href="#contact" className="btn">
                        <Mail size={17} /> {t('hero.contact_me')}
                    </a>
                </div>

                <div className="hero-stats">
                    {stats.map((s) => (
                        <div key={s.lbl} className="hero-stat">
                            <div className="num">{s.num}</div>
                            <div className="lbl">{s.lbl}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
