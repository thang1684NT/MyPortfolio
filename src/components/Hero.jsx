import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>

                    <div className="fade-in">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'var(--skill-bg)',
                            color: 'var(--primary)',
                            padding: '0.6rem 1.4rem',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            border: '1px solid var(--border-glow)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            <ShieldCheck size={18} /> {t('hero.greeting')}
                        </div>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '900', lineHeight: '1', marginBottom: '1.5rem' }}>
                            <span className="text-gradient">{t('hero.name')}</span>
                        </h1>

                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-primary)',
                            fontSize: '2rem',
                            fontWeight: '800',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '900' }}>&gt;_</span> {t('hero.role')}
                        </div>

                        <p style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            maxWidth: '580px',
                            lineHeight: '1.8',
                            fontWeight: '500'
                        }}>
                            Passionate about building efficient applications and eager to contribute to real-world projects.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary">
                                {t('hero.cta')} <ArrowRight size={20} />
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
                            padding: '12px',
                            borderRadius: '3.5rem',
                            borderWidth: '2px',
                            background: 'var(--bg-card)',
                            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img
                                src="/avatar.png"
                                alt="Nguyễn Nam Thắng"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    borderRadius: '3rem',
                                    display: 'block',
                                    transform: 'scale(1.01)'
                                }}
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=Thang&background=6366f1&color=fff&size=512";
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
