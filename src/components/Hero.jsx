import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="section" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                    maxWidth: '1080px',
                    margin: '0 auto'
                }}>

                    <div className="fade-in">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--skill-bg)',
                            color: 'var(--primary)',
                            padding: '0.45rem 1.1rem',
                            borderRadius: '2rem',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            marginBottom: '1.25rem',
                            border: '1px solid var(--border-glow)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            <ShieldCheck size={15} /> {t('hero.greeting')}
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.08', marginBottom: '1.1rem', letterSpacing: '-1px' }}>
                            <span className="text-gradient">{t('hero.name')}</span>
                        </h1>

                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-primary)',
                            fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                            fontWeight: '700',
                            marginBottom: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem'
                        }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '800' }}>&gt;_</span> {t('hero.role')}
                        </div>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            maxWidth: '520px',
                            lineHeight: '1.75',
                            fontWeight: '500'
                        }}>
                            {t('hero.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary">
                                {t('hero.cta')} <ArrowRight size={17} />
                            </a>
                            <a href="#contact" className="btn">
                                {t('hero.contact_me')}
                            </a>
                        </div>
                    </div>

                    <div className="fade-in" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <div className="glass" style={{
                            padding: '8px',
                            borderRadius: '2rem',
                            borderWidth: '2px',
                            background: 'var(--bg-card)',
                            boxShadow: '0 24px 48px -14px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img
                                src={`${import.meta.env.BASE_URL}avatar.png`}
                                alt="Nguyễn Nam Thắng"
                                width="640"
                                height="640"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    maxWidth: '330px',
                                    borderRadius: '1.7rem',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Thang&background=6366f1&color=fff&size=512";
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
