import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, MonitorSmartphone, Server, Database, Wrench } from 'lucide-react';

// icon = skillicons.dev id; null = text monogram (skillicons has no SQL Server icon)
const categories = [
    {
        key: 'languages',
        icon: <Code size={20} />,
        items: [
            { name: 'Java', icon: 'java' },
            { name: 'C#', icon: 'cs' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'TypeScript', icon: 'ts' },
            { name: 'C++', icon: 'cpp' },
        ],
    },
    {
        key: 'frontend',
        icon: <MonitorSmartphone size={20} />,
        items: [
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'React', icon: 'react' },
            { name: 'React Native', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Tailwind CSS', icon: 'tailwindcss' },
        ],
    },
    {
        key: 'frameworks',
        icon: <Server size={20} />,
        items: [
            { name: 'ASP.NET Core', icon: 'dotnet' },
            { name: 'Spring Boot', icon: 'spring' },
            { name: 'Express', icon: 'express' },
        ],
    },
    {
        key: 'database',
        icon: <Database size={20} />,
        items: [
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'Microsoft SQL Server', icon: null, fallback: 'SQL' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Redis', icon: 'redis' },
        ],
    },
    {
        key: 'tools',
        icon: <Wrench size={20} />,
        items: [
            { name: 'Git', icon: 'git' },
            { name: 'DevOps', icon: 'githubactions' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Postman', icon: 'postman' },
            { name: 'VS Code', icon: 'vscode' },
        ],
    },
];

const SkillChip = ({ item, index = 0 }) => (
    <span className="skill-chip" style={{ animationDelay: `${(index % 6) * 0.22}s` }}>
        {item.icon ? (
            <img
                src={`https://skillicons.dev/icons?i=${item.icon}`}
                alt=""
                width="20"
                height="20"
                loading="lazy"
                decoding="async"
            />
        ) : (
            <span className="skill-chip-fallback">{item.fallback}</span>
        )}
        {item.name}
    </span>
);

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">02 — {t('nav.skills')}</p>
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-sub">{t('skills.tagline')}</p>
                </div>

                <div className="skills-grid">
                    {categories.map((cat, idx) => (
                        <div
                            key={cat.key}
                            className="skill-card reveal"
                            style={{ transitionDelay: `${idx * 70}ms` }}
                        >
                            <div className="skill-card-head">
                                <span className="skill-card-icon">{cat.icon}</span>
                                {t(`skills.${cat.key}`)}
                            </div>
                            <div className="skill-card-chips">
                                {cat.items.map((item, i) => (
                                    <SkillChip key={item.name} item={item} index={i} />
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
