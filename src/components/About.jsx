import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const certificates = [
        { name: "Software Development Lifecycle", issuer: "University of Minnesota", url: "https://www.coursera.org/specializations/software-development-lifecycle" },
        { name: "Web Design for Everybody", issuer: "University of Michigan", url: "https://www.coursera.org/specializations/web-design" }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">01 — {t('about.title')}</p>
                    <h2 className="section-title">{`${t('about.tagline')} ${t('about.tagline_accent')}`}</h2>
                </div>

                <div className="about-grid">
                    <div className="reveal">
                        <p className="about-text">{t('about.description')}</p>

                        <div className="about-photo">
                            <img
                                src={`${import.meta.env.BASE_URL}avatar.png`}
                                alt="Nguyễn Nam Thắng"
                                width="64"
                                height="64"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Thang&background=059669&color=fff&size=128"; }}
                            />
                            <div>
                                <div className="who">Nguyễn Nam Thắng</div>
                                <div className="role">{t('hero.role')} · Da Nang, Viet Nam</div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal">
                        <div className="card">
                            <div className="card-head">
                                <GraduationCap size={20} /> {t('about.education_title')}
                            </div>
                            <p><strong style={{ color: 'var(--text)' }}>{t('about.education_school')}</strong></p>
                            <p>{t('about.education_degree')}</p>
                            <p className="meta">{t('about.education_period')} · <b>GPA: 3.2</b></p>
                        </div>

                        <div className="card">
                            <div className="card-head">
                                <Award size={20} /> {t('certificates.title')}
                            </div>
                            {certificates.map((cert) => (
                                <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" className="cert-link">
                                    <span>
                                        <span className="cert-name">{cert.name}</span>
                                        <br />
                                        <span className="cert-issuer">{cert.issuer}</span>
                                    </span>
                                    <ExternalLink size={15} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
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
