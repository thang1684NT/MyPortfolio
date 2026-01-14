import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Database, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    const skillsData = [
        {
            key: 'languages',
            icon: <Code size={32} />,
            gradient: 'var(--gradient-1)',
            items: [
                { name: 'Java', icon: 'java' },
                { name: 'C++', icon: 'cpp' },
                { name: 'C#', icon: 'cs' },
                { name: 'JavaScript', icon: 'javascript' }
            ]
        },
        {
            key: 'frameworks',
            icon: <Terminal size={32} />,
            gradient: 'var(--gradient-2)',
            items: [
                { name: 'Spring Boot', icon: 'spring' },
                { name: 'ASP.NET', icon: 'dotnet' },
                { name: 'Express', icon: 'express' },
                { name: 'React', icon: 'react' }
            ]
        },
        {
            key: 'database',
            icon: <Database size={32} />,
            gradient: 'var(--gradient-1)',
            items: [
                { name: 'MySQL', icon: 'mysql' },
                { name: 'PostgreSQL', icon: 'postgres' },
                { name: 'SQL Server', icon: 'mysql' },
                { name: 'MongoDB', icon: 'mongodb' }
            ]
        },
        {
            key: 'tools',
            icon: <Wrench size={32} />,
            gradient: 'var(--gradient-2)',
            items: [
                { name: 'Docker', icon: 'docker' },
                { name: 'Git', icon: 'git' },
                { name: 'VS Code', icon: 'vscode' },
                { name: 'Postman', icon: 'postman' }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="fade-in">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', lineHeight: 1.2 }}>
                            <span className="text-gradient">{t('skills.title')}</span>
                        </h2>
                        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '1.5rem auto', borderRadius: '2px' }}></div>
                        <p style={{ color: 'var(--text-secondary)', fontWeight: '500', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                            {t('skills.tagline')}
                        </p>
                    </div>
                </div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2.5rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {skillsData.map((category, idx) => (
                        <div key={category.key} className="glass fade-in" style={{
                            padding: '3rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            animationDelay: `${0.1 * idx}s`
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '1.2rem',
                                background: category.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                marginBottom: '1.5rem',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                            }}>
                                {category.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '800' }}>
                                {t(`skills.${category.key}`)}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                {category.items.map((item) => (
                                    <div key={item.name} className="skill-tag" style={{ border: '1px solid var(--border-glow)' }}>
                                        <img
                                            src={`https://skillicons.dev/icons?i=${item.icon}`}
                                            alt={item.name}
                                            style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                                        />
                                        <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
