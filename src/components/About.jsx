import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, ExternalLink, Sparkles } from 'lucide-react';

// Lightweight code-editor visual — replaces the heavy Lottie animations
// (lottie-react bundle + 2 remote JSON files looping forever) that caused lag.
const CodeWindow = () => (
    <div className="glass" style={{ padding: '0', borderRadius: '1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
            display: 'flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.7rem 1rem', borderBottom: '1px solid var(--border-glow)',
            background: 'var(--skill-bg)'
        }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
            <span style={{ marginLeft: '0.6rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>developer.js</span>
        </div>
        <div style={{ padding: '1.1rem 1.25rem' }}>
            <code className="code-window">
                <span className="tok-key">const</span> developer <span className="tok-punc">= {'{'}</span>{'\n'}
                {'  '}<span className="tok-prop">name</span><span className="tok-punc">:</span> <span className="tok-str">'Nguyễn Nam Thắng'</span><span className="tok-punc">,</span>{'\n'}
                {'  '}<span className="tok-prop">role</span><span className="tok-punc">:</span> <span className="tok-str">'Software Engineer'</span><span className="tok-punc">,</span>{'\n'}
                {'  '}<span className="tok-prop">stack</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">'Java'</span><span className="tok-punc">,</span> <span className="tok-str">'C#'</span><span className="tok-punc">,</span> <span className="tok-str">'React'</span><span className="tok-punc">],</span>{'\n'}
                {'  '}<span className="tok-prop">hardWorker</span><span className="tok-punc">:</span> <span className="tok-key">true</span><span className="tok-punc">,</span>{'\n'}
                {'  '}<span className="tok-prop">quickLearner</span><span className="tok-punc">:</span> <span className="tok-key">true</span><span className="tok-punc">,</span>{'\n'}
                {'  '}<span className="tok-prop">hireable</span><span className="tok-punc">:</span> <span className="tok-key">function</span> <span className="tok-punc">() {'{'}</span>{'\n'}
                {'    '}<span className="tok-key">return</span> <span className="tok-key">true</span><span className="tok-punc">;</span>{'\n'}
                {'  '}<span className="tok-punc">{'}'}</span>{'\n'}
                <span className="tok-punc">{'};'}</span>
            </code>
        </div>
    </div>
);

const About = () => {
    const { t } = useTranslation();

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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div className="fade-in">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary)', marginBottom: '1.1rem', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '1px' }}>
                            <Sparkles size={16} /> {t('about.title')}
                        </div>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                            <span className="text-gradient">{t('about.tagline')} {t('about.tagline_accent')}</span>
                        </h2>

                        <div style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.8', background: 'var(--skill-bg)', padding: '1.4rem 1.5rem', borderRadius: '1rem', borderLeft: '4px solid var(--primary)', marginBottom: '1.75rem' }}>
                            <p>{t('about.description')}</p>
                        </div>

                        <div className="glass" style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                                <GraduationCap size={22} color="var(--primary)" />
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>{t('about.education_title')}</h3>
                            </div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t('about.education_school')}</h4>
                            <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.92rem' }}>{t('about.education_degree')}</p>
                            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.8rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                                <span>{t('about.education_period')}</span>
                                <span>•</span>
                                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>GPA: 3.2</span>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in" style={{ animationDelay: '0.15s' }}>
                        <CodeWindow />

                        <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {certificates.map((cert) => (
                                <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" className="glass" style={{ padding: '1rem 1.25rem', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    <span>{cert.name}<span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{cert.issuer}</span></span>
                                    <ExternalLink size={16} color="var(--primary)" />
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
