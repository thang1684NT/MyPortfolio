import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import Lottie from 'lottie-react';

const About = () => {
    const { t } = useTranslation();

    const mainLottieUrl = "https://assets9.lottiefiles.com/packages/lf20_pwohahvd.json";
    const smallLottieUrl = "https://assets10.lottiefiles.com/packages/lf20_m6zL3u.json";

    const [mainAnim, setMainAnim] = useState(null);
    const [smallAnim, setSmallAnim] = useState(null);

    useEffect(() => {
        const fetchAnims = async () => {
            try {
                const [res1, res2] = await Promise.all([
                    fetch(mainLottieUrl).then(r => r.ok ? r.json() : null),
                    fetch(smallLottieUrl).then(r => r.ok ? r.json() : null)
                ]);
                setMainAnim(res1);
                setSmallAnim(res2);
            } catch (e) {
                console.error("Lottie loading failed", e);
            }
        };
        fetchAnims();
    }, []);

    const certificates = [
        {
            name: "Software Development Lifecycle",
            issuer: "University of Minnesota",
            url: "https://www.coursera.org/specializations/software-development-lifecycle"
        },
        {
            name: "Web Design for Everybody",
            issuer: "University of Michigan",
            url: "https://www.coursera.org/specializations/web-design"
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="fade-in">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                            <Sparkles size={18} /> {t('about.title')}
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', fontWeight: '900', lineHeight: 1.1 }}>
                            <span className="text-gradient">{t('about.tagline')} {t('about.tagline_accent')}</span>
                        </h2>

                        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', background: 'var(--skill-bg)', padding: '2rem', borderRadius: '1.5rem', borderLeft: '4px solid var(--primary)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <p style={{ flex: 1 }}>{t('about.description')}</p>

                                <div style={{ width: '100px', flexShrink: 0, minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {smallAnim ? (
                                        <Lottie animationData={smallAnim} loop={true} style={{ width: '100%', height: '100%' }} />
                                    ) : (
                                        <Terminal size={40} color="var(--primary)" opacity={0.5} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="glass" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GraduationCap size={24} color="var(--primary)" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{t('about.education_title')}</h3>
                            </div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t('about.education_school')}</h4>
                            <p style={{ color: 'var(--primary)', fontWeight: '700' }}>{t('about.education_degree')}</p>
                            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                <span>{t('about.education_period')}</span>
                                <span>•</span>
                                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>GPA: 3.2</span>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="glass" style={{ padding: '1rem', borderRadius: '3rem', position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '100%', height: '400px' }}>
                                {mainAnim ? (
                                    <Lottie animationData={mainAnim} loop={true} style={{ width: '100%', height: '100%' }} />
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>
                                        <div style={{ fontSize: '4rem' }}>💻</div>
                                        <p style={{ color: 'var(--text-primary)' }}>Loading Innovation...</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {certificates.map((cert) => (
                                <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" className="glass" style={{ padding: '1.2rem 1.5rem', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    <span>{cert.name}</span>
                                    <ExternalLink size={18} color="var(--primary)" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
