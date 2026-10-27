import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Database, Wrench, Terminal, MonitorSmartphone } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    // icon = skillicons.dev id; null = render a text monogram instead
    // (skillicons has no Microsoft SQL Server icon)
    const skillsData = [
        {
            key: 'languages',
            icon: <Code size={26} />,
            gradient: 'var(--gradient-1)',
            items: [
                { name: 'Java', icon: 'java' },
                { name: 'C#', icon: 'cs' },
                { name: 'JavaScript', icon: 'js' },
                { name: 'TypeScript', icon: 'ts' },
                { name: 'C++', icon: 'cpp' }
            ]
        },
        {
            key: 'frontend',
            icon: <MonitorSmartphone size={26} />,
            gradient: 'var(--gradient-2)',
            items: [
                { name: 'HTML', icon: 'html' },
                { name: 'CSS', icon: 'css' },
                { name: 'React', icon: 'react' },
                { name: 'React Native', icon: 'react' },
                { name: 'Next.js', icon: 'nextjs' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' }
            ]
        },
        {
            key: 'frameworks',
            icon: <Terminal size={26} />,
            gradient: 'var(--gradient-1)',
            items: [
                { name: 'ASP.NET Core', icon: 'dotnet' },
                { name: 'Spring Boot', icon: 'spring' },
                { name: 'Express', icon: 'express' }
            ]
        },
        {
            key: 'database',
            icon: <Database size={26} />,
            gradient: 'var(--gradient-2)',
            items: [
                { name: 'PostgreSQL', icon: 'postgres' },
                { name: 'Microsoft SQL Server', icon: null, fallback: 'SQL' },
                { name: 'MySQL', icon: 'mysql' },
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'Redis', icon: 'redis' }
            ]
        },
        {
            key: 'tools',
            icon: <Wrench size={26} />,
            gradient: 'var(--gradient-1)',
            items: [
                { name: 'Git', icon: 'git' },
                { name: 'DevOps', icon: 'githubactions' },
                { name: 'Docker', icon: 'docker' },
                { name: 'Postman', icon: 'postman' },
                { name: 'VS Code', icon: 'vscode' }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="fade-in">
                        <h2 className="section-title">
                            <span className="text-gradient">{t('skills.title')}</span>
                        </h2>
                        <div className="section-divider"></div>
                        <p style={{ color: 'var(--text-secondary)', fontWeight: '500', maxWidth: '560px', margin: '0.4rem auto 0', fontSize: '0.95rem' }}>
                            {t('skills.tagline')}
                        </p>
                    </div>
                </div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.75rem',
                    maxWidth: '980px',
                    margin: '0 auto'
                }}>
                    {skillsData.map((category, idx) => (
                        <div key={category.key} className="glass fade-in" style={{
                            padding: '1.9rem 1.6rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            animationDelay: `${0.08 * idx}s`,
                            ...(idx === skillsData.length - 1 ? { gridColumn: '1 / -1' } : {})
                        }}>
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '1rem',
                                background: category.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                marginBottom: '1.1rem',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                            }}>
                                {category.icon}
                            </div>

                            <h3 style={{ fontSize: '1.18rem', marginBottom: '1.4rem', fontWeight: '800' }}>
                                {t(`skills.${category.key}`)}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.65rem',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                {category.items.map((item) => (
                                    <div key={item.name} className="skill-tag">
                                        {item.icon ? (
                                            <img
                                                src={`https://skillicons.dev/icons?i=${item.icon}`}
                                                alt={item.name}
                                                width="22"
                                                height="22"
                                                loading="lazy"
                                                decoding="async"
                                                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <span className="skill-icon-fallback">{item.fallback}</span>
                                        )}
                                        <span style={{ fontSize: '0.83rem', fontWeight: '600' }}>{item.name}</span>
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
